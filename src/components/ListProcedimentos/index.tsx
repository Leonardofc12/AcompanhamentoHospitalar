import React, {useState} from 'react';
import Logo from '../../assets/sus-logo.png';
import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native';
import { Card } from 'react-native-paper'
import styles, {IconSearch} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

// import {useSelector,useDispatch} from 'react-redux'

export interface Review {
  id: string;
  name: string;
}

const ListProcedimentos: React.FC = () => { 
    // const {data,loading} =  useSelector((state)=>{
    //     return state
    // })
  const [review, setReviews] = useState<Review[]>([
      {name: 'Leonardo', id: '1'}, 
      {name: "Vinicius", id: '2'},
      {name: 'Leonardo', id: '3'}, 
      {name: "Vinicius", id: '4'},
      {name: 'Leonardo', id: '5'}, 
      {name: "Vinicius", id: '6'},
      {name: 'Leonardo', id: '7'}, 
      {name: "Vinicius", id: '8'}
    ]);

  const renderList = ((item)=>{
    return(
      <Card style={styles.mycard}>
      <View style={styles.cardView}>
           <Image
          style={{width:60,height:60,borderRadius:30}}
          source={Logo}
          
          />
          <View style={styles.row}>
            <View> 
                <Text style={styles.textTitle}>{item.name}</Text>   
                <Text style={styles.text}>Exame do dia</Text> 
                <Text style={styles.text}>14/11/2020</Text> 
            </View>
            <IconSearch name="download" size={30} color="#312e38"/>
          </View>
      </View>
     </Card>
    )
})

  return (
    <View style={{flex:1}}>
        <FlatList
        style={{flex: 1}}
        data={review}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {return renderList(item)}}
        // onRefresh={()=>fetchData()}
        // refreshing={loading}
        />
    </View>
  );
};





export default ListProcedimentos;
