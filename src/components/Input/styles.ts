import styled from 'styled-components/native';
import FIcon from 'react-native-vector-icons/FontAwesome';
export const Container = styled.View` 
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #fff;
  border-color: grey;
  border-width: 0.4px;
  border-radius: 10px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center
`; 
 
export const TextInput = styled.TextInput`
  flex: 1;
  color: #232129;
  font-size: 16px;
  font-family: 'RobotoSlab-regular'
`;

export const Icon = styled(FIcon)`
  margin-right: 16px
`
