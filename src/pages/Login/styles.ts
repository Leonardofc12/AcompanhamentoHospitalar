import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Date = styled.Text`
  font-size: 14px; 
  font-family: 'RobotoSlab-regular';
  font-weight: bold;
  color: #000;
  text-align: left;
  margin-left: 10px;
`;
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 150,
        height: 150, 
        borderRadius: 100
    },
    input: {
       marginTop: 10,
       padding: 10,
       width: 300,
       backgroundColor: '#fff',
       fontSize: 16,
       fontWeight: 'bold',
       borderRadius: 3,
       textAlign: 'center',
       shadowOpacity: 0.5,
       shadowRadius: 3,
       shadowOffset: {
         height: 0,
         width: 0,
       },
       elevation: 2,
    }, 
    botaoAuth: {
        width: 300,
        height: 42,
        backgroundColor: '#91ffc8',
        marginTop: 10,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
          height: 0,
          width: 0,
        },
        elevation: 2,
    }, 
    botaoText: {
        fontSize: 16,
        fontWeight: "bold"
    }
});

export default styles;