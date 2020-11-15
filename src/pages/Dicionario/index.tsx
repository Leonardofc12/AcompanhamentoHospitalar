import React, { useCallback, useState } from 'react';
import styles, { Container, Title,ViewHeader, Content, FilterView, FilterText} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList, RefreshControl, View } from 'react-native';
import api from '../../services/api';
import ListDicionarios from '../../components/ListDicionarios';

interface Dic {
    id: number;
    nome: string;
    descricao: string;
  }

const Dicionario : React.FC = () => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [listData, setListData] = React.useState<Dic[]>([]);
    const [figure, setFigure] = useState<boolean>(false);

   
    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        try {
        await api.get('https://acompanhamentohospitalarapi.azurewebsites.net/TermosTecnicos')
        .then(response => {
            setListData(response.data);
            console.log(listData);
            });
        setRefreshing(false)
        } catch (error) {
        console.error(error);
        }
      }, [refreshing]);

    return (
        <Container>
        <Content>
          <ViewHeader style={{paddingTop: 25, paddingBottom: 25}}>
            <Title> Significados </Title>
          </ViewHeader> 
          
          <FilterView>
              <FilterText placeholder="Pesquisar" placeholderTextColor="#000"></FilterText>
              <Icon name={ figure == false ? "search" : "home"} size={30} color="#312e38" onPress={() => setFigure(!figure)}/>
          </FilterView>

          <View style={{flex:1}}>
            <FlatList
                    data={listData}
                    renderItem={({ item }) => <ListDicionarios id={item.id} nome={item.nome} descricao={item.descricao}/>}
                    keyExtractor={item => item.id.toLocaleString()}
                    refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                    contentContainerStyle={styles.list}
                />
            </View>
        </Content>         
      </Container>
    )
}; 

export default Dicionario;