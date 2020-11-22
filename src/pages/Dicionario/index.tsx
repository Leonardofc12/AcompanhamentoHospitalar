import React, { useCallback, useEffect, useState } from 'react';
import styles, { Container, Title,ViewHeader, Content, FilterView, FilterText} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList, RefreshControl, View } from 'react-native';
import api from '../../services/api';
import ListDicionarios from '../../components/ListDicionarios';
import _ from 'lodash';

export interface Dic {
    id: number;
    nome: string;
    descricao: string;
  }

const Dicionario : React.FC = () => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [listData, setListData] = React.useState<Dic[]>([]);
    const [figure, setFigure] = useState<boolean>(false);

    const [filter, setFilter] = useState<String>('');
    useEffect(() => {
      GetDados();
    },[])

    const GetDados = useCallback(async (desc? : string) => {
      console.log(`TermosTecnicos/GetSignificados/${ desc }`)
        
        if(desc == undefined)
            desc = '';
      
        setRefreshing(true);
        try {
        await api.get(`TermosTecnicos/GetSignificados?termo=${ desc }`)
        .then(response => {
            setListData(response.data);
            });
        setRefreshing(false)
        } catch (error) {
        console.error(error);
        }
      }, [refreshing]);

    const filterfiles = useCallback((input: string) => {
        setFilter(input);
        const search = _.debounce(GetDados, 1500);
        search(input);
      }, []);
    
    return (
        <Container>
        <Content>
          <ViewHeader style={{paddingTop: 25, paddingBottom: 25}}>
            <Title> Significados </Title>
          </ViewHeader> 
          
          <FilterView>
              <FilterText placeholder="Pesquisar" placeholderTextColor="#000" onChangeText={(text) => {filterfiles(text)} }></FilterText>
              <Icon name={ figure == false ? "search" : "home"} size={30} color="#312e38" onPress={() => setFigure(!figure)}/>
          </FilterView>

          <View style={{flex:1}}>
            <FlatList
                    data={listData}
                    renderItem={({ item }) => <ListDicionarios dicionario={item}/>}
                    keyExtractor={item => item.id.toLocaleString()}
                    refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={GetDados} />
                    }
                    contentContainerStyle={styles.list}
                />
            </View>
        </Content>         
      </Container>
    )
}; 

export default Dicionario;