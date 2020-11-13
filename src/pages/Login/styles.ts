import styled from 'styled-components/native';
import { Platform, StyleSheet } from 'react-native';

export const Date = styled.Text`
  font-size: 14px; 
  font-family: 'RobotoSlab-regular';
  font-weight: bold;
  color: #000;
  text-align: left;
  margin-left: 10px;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #232129;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 150,
        height: 150,
    },
    input: {
       marginTop: 10,
       padding: 10,
       width: 300,
       backgroundColor: '#fff',
       
    }, 
    botaoAuth: {
        width: 300,
        height: 42,
        backgroundColor: '#91ffc8',
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 0.5,
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