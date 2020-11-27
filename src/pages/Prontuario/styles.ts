import styled from 'styled-components/native';
import { Platform, StyleSheet, FlatList} from 'react-native';
import { Category } from './index';

export const CategoryContainer = styled.View`
  margin-top: 6px; 
  justify-content: center; 
  align-items: center;
  background-color: #fff;
  padding-bottom: 10px;
  margin-left: 10px;
`;

export const CategoriasList = styled(
    FlatList as new () => FlatList<Category>
  )`
    margin-top: 0px;
  `; 
  export const CategoryContentActive = styled.TouchableOpacity`
  align-items: center; 
  background-color: tomato;
  padding: 8px 12px;
  margin-right: 8px;
  border-radius: 10px;
`;

export const CategoryTextActive = styled.Text`
  font-size: 16px;
  font-family: 'RobotoSlab-regular';
  font-weight: bold;
  color: #f4ede8;
`; 
export const CategoryContent = styled.TouchableOpacity`
  align-items: center; 
  background-color: #3e3b47;
  padding: 8px 12px;
  margin-right: 8px;
  border-radius: 10px;
`;
export const CategoryText = styled.Text`
  font-size: 16px;
  font-family: 'RobotoSlab-regular';
  font-weight: bold;
  color: #f4ede8;
`; 


export const Container = styled.View`
background: #fff,
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
`;

export const ContentProntuario = styled.View`
  flex-direction: row;
  padding: 16px;
  border: 3px; 
  border-color: #C0C0C0;
  margin-bottom: 14px;
  border-radius: 10px;
  background-color: #006aff;
`;

export const ViewHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 4px 10px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;


export const ViewContent= styled.View`
  margin-left: 10px;
`;

export const TextHeader  = styled.Text`
  font-size: 18px;
  color: #fff;
`;


export const FilterView = styled.View` 
  width: 100%;
  height: 50px;
  padding: 0px 14px;
  background: #E6E6E6;
  border-radius: 10px;
  margin-bottom: 10px;
  /* border-color: #ff6347;
  border-width: 1px; */

  flex-direction: row;
  align-items: center;
`;

export const FilterText = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  color: #312e38;
  font-size: 16px;
`;
   