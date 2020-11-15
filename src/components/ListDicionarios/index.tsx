import React from "react";
import { View, Text } from "react-native";
import { Card } from 'react-native-paper';
import styles from "./styles";

export interface Dic {
    id: number;
    nome: string;
    descricao: string;
  }

const ListDicionarios : React.FC<Dic> = ({ nome, descricao }) => {
    return (
        <Card style={styles.mycard}>
            <View style={styles.item}>
                <Text style={styles.itemText}>{nome}</Text>
                <Text style={styles.itemText}>{descricao}</Text>
            </View>
        </Card>
    )
};
export default ListDicionarios;