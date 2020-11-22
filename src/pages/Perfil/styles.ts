import { StyleSheet } from 'react-native'
import styled from 'styled-components/native';

export const TextHeader  = styled.Text`
  font-size: 20px;
  margin-top: 15px;
  font-weight: bold;
  color: #000;
`;
export const Container = styled.View`
background: #fff,
  flex: 1;
`;
export const Content = styled.View`
  flex: 1;
`;

export const AlignLogo = styled.View`
    align-items: center;
    justify-content: center;
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


export const ItemImage = styled.Image`
  height: 200px;
  width: 200px;
  border-radius: 10px;
`;

export const ViewContent= styled.View`
 top: 25px; 
 margin: 10px;
`;

const styles = StyleSheet.create ({
   
});

export default styles;