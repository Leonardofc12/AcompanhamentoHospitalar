import { Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

export const IconSearch = styled(Icon)`
    top: 20px
`;


const styles = StyleSheet.create({
    mycard:{
        margin:5,
       
    },
    cardView:{
         flexDirection:"row",
         padding:6
    },
    textTitle:{
        fontSize:20,
        fontWeight: 'bold'
    },
    text:{
        fontSize:18,
    },
    row: {
        flexDirection:"row",
        marginLeft:10, 
        justifyContent: "space-between",
        width: 290
    }
});

export default styles;
// export const Container = styled.View`
//     margin-right: 6px;   width: 140px;
//     height: 120px; 
//     border-radius: 8px;
//     border: 5px;
//     box-shadow: 10px 10px black;
// `;
 

// export const ViewImage = styled(LinearGradient)`
//     position: absolute;
//     width: 140px;
//     height: 120px;
//     opacity: 0.4;
//     border-radius: 8px;
// `;

// export const Image = styled.Image` 
//     width: 140px;
//     height: 120px; 
//     border-radius: 8px;
// `;
 
// export const Name = styled.Text`
//   color: #000000;
//   font-size: 20px;
//   font-family: 'RobotoSlab-regular';
//   font-weight: bold; 
//   position: absolute;
//   left: 20px;
//   top: 30px;
// `;

// const styles = StyleSheet.create ({
//     container: {
//       flex: 1,
//       paddingTop: 30,
//       backgroundColor: "#FFF"
//     },
//     paragraph: {
//       fontSize: 18,
//       fontWeight: "bold",
//       textAlign: "center",
//       color: "#34495e",
//       paddingBottom: 10
//     },
//     addButton: {
//       height: 60,
//       width: 60,
//       elevation: 3,
//       borderColor: "#00F",
//       borderRadius: 30,
//       alignItems: "center",
//       justifyContent: "center",
//       position: "absolute",
//       bottom: 25,
//       right: 25
//     },
//     addIcon: {
//       fontSize: 35,
//       color: "gray",
//       textAlign: "center"
//     }
//   });