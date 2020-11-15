import { Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
    postAtividades: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
        height: 100,
        backgroundColor: '#323C47',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'stretch'
    },

    iconAtividades: {
        marginRight: 10,
        padding: 8,
        height: 60,
        width: 60,
        borderRadius: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'stretch'
    },

    icon: {
        alignSelf: 'center'
    },

    checkIconAtividades: {
        paddingTop: 0,
        paddingLeft: 1.5,
        paddingRight: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        color: "#19B996",
        position: 'absolute',
        right: 0,
        top: 0
    },
});

export default styles;