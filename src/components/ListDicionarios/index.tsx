import React from "react";
import { View, Text} from "react-native";
import { Card } from 'react-native-paper';
import styles from "./styles";
import { Dic } from "../../pages/Dicionario";


const ListDicionarios : React.FC<Dic> = ({ dicionario }) => {
    return (
        <Card style={styles.mycard}>
        <View style={styles.cardView}>
            <View style={styles.row}>
                <View> 
                    <Text style={styles.textTitle}>{dicionario.nome}</Text>   
                    <Text style={styles.text}>{dicionario.descricao}</Text>
                </View>
            </View>
        </View>
        </Card>
    )
};
export default ListDicionarios;