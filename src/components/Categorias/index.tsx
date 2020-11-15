

import React, {useCallback, useState} from 'react';
import { View } from 'react-native';
import ScrollingButtonMenu from 'react-native-scrolling-button-menu';
import { CategoriasList, CategoryContainer, CategoryContent, CategoryContentActive, CategoryText, CategoryTextActive } from './styles';

export interface Category {
    nome: string;
    value: number;
}

export interface Type {
    nome: string;
    value: number;
  }
  
const Categorias: React.FC = () => { 
    
    const [category, setCategory] = useState<Type>();
    const [categorias, setCategorias] = useState<Category[]>([
        {nome: 'Todos', value: 1 },
        {nome: 'Prescrições', value: 2 },
        {nome: 'Exames', value: 3},
        {nome: 'Evoluções', value: 4 }
    ])

    const filterByCategory = useCallback((value: Type) => {
        setCategory(value);
    }, []);

    const cleanCategory = useCallback(() => {
        setCategory({});
      },[])

    const onPressButtonMenu = (menu) => {
        console.log(menu.text);
    }
    return(
        
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
        
    )
};

export default Categorias;
