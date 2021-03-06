import React, { useEffect, useState, useCallback} from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import api from '../../services/api';
import { Container, Title, ContentProntuario, ViewContent, ViewHeader, Content, TextHeader, FilterView, FilterText, CategoryContainer, CategoriasList, CategoryContentActive, CategoryTextActive, CategoryContent, CategoryText} from './styles';
import ListProcedimentos from '../../components/ListProcedimentos';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAuth } from '../../hooks/auth';
import { IconSearch } from '../../components/ListProcedimentos/styles';
import { Usuario } from '../Perfil';
import _ from 'lodash';
import RNFetchBlob from 'rn-fetch-blob';

export interface Procedimentos {
  id: string;
  nomeProcedimento: string;
  funcionario: string;
  dataRealizacao: string;
  horaRelizacao: string;
  idArquivo: Number;
  categoria: string;

}

export interface Category {
  nome: string;
  value: number;
}

export interface Type {
  nome: string;
  value: number;
}

const Prontuario : React.FC = () => {
  const { user } = useAuth(); 
  const [refreshing, setRefreshing] = React.useState(false);
  const [listData, setListData] = React.useState<Procedimentos[]>([]);
  const [dataUser, setdataUser] = React.useState<Usuario>();
  const [page, setPage] = useState<Number>(1);
  const [filter, setFilter] = useState<String>('');
  const [category, setCategory] = useState<Type>();

  const [categorias, setCategorias] = useState<Category[]>([
      {nome: 'Todos', value: 1 },
      {nome: 'Prescrições', value: 2 },
      {nome: 'Exames', value: 3},
      {nome: 'Evoluções', value: 4 }
  ])

  const filterByCategory = useCallback((value: Type) => {
      setCategory(value);
      loadfiles('', value.nome)
  }, []);

  const cleanCategory = useCallback(() => {
      setCategory({});
    },[])
    

  const loadfiles = useCallback(async (filter: String, categoria: string) => {
      setRefreshing(true);
      setListData([]);
        api.post('Prontuarios/GetProcedimentos', { Id : user.id , Categoria: categoria, Filter: filter} )
        .then(response => {
            setListData(response.data);
            });
      setRefreshing(false)
      
    }, []);

    const filterfiles = useCallback((input: string) => {
      setFilter(input);
      const search = _.debounce(loadfiles, 1500);
      search(input, "Todos");
    }, []);
  
    const GetUser = () => {
      api.get(`Usuario/GetUser/${ user.id }`)
      .then(response => { setdataUser(response.data); });
    }
    const exportProntuario = () => {
      console.log(user.id)
       api.post(`/ExportFiles/EnviaEmail?IdPaciente=${ user.id }`)
        .then(response => {
          console.log(response)
            alert("Email enviado!")
            });
    }
    const downloadAll = () => {
      const android = RNFetchBlob.android

      RNFetchBlob.config({
          addAndroidDownloads : {
              useDownloadManager : true,
              title : 'AcompanhamentoHospitalar.zip',
              description : 'Acompanhamento Hospitalar',
              mime : 'application/octet-stream',
              mediaScannable : true,
              notification : true,
          }
          })
          .fetch('GET', `https://acompanhamentohospitalarapi.azurewebsites.net//Prontuarios/DownloadAllProcedimentos/${ user.id }`)
          .then((res) => {
              android.actionViewIntent(res.path(), 'application/octet-stream')
          })
      
    }

    useEffect(() => {
      GetUser();
      loadfiles(filter, "Todos");
    },[])
    
    return (
        <Container>
          <Content> 
          <ContentProntuario>
            <ViewContent>
              <TextHeader> Paciente: {dataUser?.nome} </TextHeader> 
              <TextHeader> Data Nascimento: {dataUser?.dataNascimento}  </TextHeader> 
            </ViewContent> 
          </ContentProntuario>
            <ViewHeader>
              <Title> Procedimentos</Title>
              <IconSearch icon="share" size={30} color="#312e38" style={{marginLeft:100, marginRight: 0}} onPress={exportProntuario}/>
              <IconSearch icon="download" size={30} color="#312e38" onPress={downloadAll}/>
            </ViewHeader> 
            
            <FilterView>
                <FilterText placeholder="Pesquisar" onChangeText={(text) => {filterfiles(text)} } placeholderTextColor="#000"></FilterText>
                <Icon name="search" size={30} color="#312e38"/>
            </FilterView>
            
            <CategoryContainer>
                <CategoriasList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categorias} 
                    keyExtractor={(item) => String(item.value)} 
                    renderItem={({ item }) => (
                        <View>
                            {
                                category == item ?
                                <CategoryContentActive onPress={cleanCategory}>
                                <CategoryTextActive> { item.nome }</CategoryTextActive>
                                </CategoryContentActive> :
                                <CategoryContent onPress={() => filterByCategory(item)}>
                                <CategoryText> { item.nome }</CategoryText>
                                </CategoryContent>
                            }
                        </View>
                    )}
                />
            </CategoryContainer>


            <View style={{flex:1}}>
                <FlatList
                  style={{flex: 1}}
                  data={listData}
                  keyExtractor={item => item.id.toLocaleString()}
                  renderItem={({ item }) => <ListProcedimentos Procedimento={item}/>}
                  refreshControl={<RefreshControl refreshing={refreshing}  />}
                />
            </View>
          </Content>         
        </Container>
    )
}
    

export default Prontuario;