import { StyleSheet } from 'react-native';

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