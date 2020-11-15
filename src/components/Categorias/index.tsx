

import React, {useState} from 'react';
import { View } from 'react-native';
import ScrollingButtonMenu from 'react-native-scrolling-button-menu';

    
export interface Review {
    id: string;
    text: string;
    textColor: string;
    backgroundColor: string;
    borderColor: string;
  }



const Categorias: React.FC = () => { 
    const [dataSourceFilters, setReviews] = useState<Review[]>([
        {
           id: '1' ,
           text:'England',
           textColor:'#FFFFFF',
           backgroundColor:'#388E3C',
           borderColor:'#388E3C',
        }]);
    const onPressButtonMenu = (menu) => {
        console.log(menu.text);
    }
    return(
        <View style={{flex:1}}>
            <ScrollingButtonMenu
            style={{flex: 1}}
            data={dataSourceFilters}
            keyExtractor={(item) => item.id}
            // onRefresh={()=>fetchData()}
            // refreshing={loading}
            />
        </View>
        
    )
};

export default Categorias;
