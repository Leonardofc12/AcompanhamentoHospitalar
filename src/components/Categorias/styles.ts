import { Platform, StyleSheet, FlatList} from 'react-native';
import styled from 'styled-components/native';
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
