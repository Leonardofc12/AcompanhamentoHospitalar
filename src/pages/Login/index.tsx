import React, { useCallback } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import api from '../../services/api';
import { CodClienteValidator, dtNascimentoValidator } from '../../utils/core';
import styles, { Date } from './styles';
import { Navigation } from '../../types';
import Logo from '../../assets/logouvv.png';//'../../assets/logouvv.png';

type Props = {
    navigation: Navigation;
  };

const Login = ({ navigation }: Props) => {
    
    const [CodCliente, setCodCliente] =  React.useState({ value: '', error: '' });
    const [DtNascimento, setDtNascimento] = React.useState({ value: '', error: '' });

    const _onLoginPressed = () => {

        const codClienteError = CodClienteValidator(CodCliente.value);
        const dtNascimentoError = dtNascimentoValidator(DtNascimento.value);
        
        //  if (codClienteError || dtNascimentoError) {
        //     setCodCliente({ ...CodCliente, error: codClienteError });
        //     setDtNascimento({ ...DtNascimento, error: dtNascimentoError });
        //     return;
        //   }
        const dados = {
            IdCliente: CodCliente.value,
            dataNascimento: DtNascimento.value
        }
        AuthData(dados).then((result) => {
            console.log(result)
            
        });
        Alert.alert("Sueceso!") 
         
    }
    const AuthData = useCallback(async (dados) => {
      const response = await api.post('Acesso/GetAcesso', dados );
      console.log(response)
 
      
    }, []);
    return (
        <View style={styles.container}>
            <Image
                source={Logo}
                style={styles.logo}>
            </Image>
            <TextInput
                style={styles.input}
                value={CodCliente.value}
                onChangeText={text => setCodCliente({ value: text, error: '' })}
                placeholder="Informe seu código de atendimento"
            />
            <TextInput
                style={styles.input}
                value={DtNascimento.value}
                onChangeText={text => setDtNascimento({ value: text, error: '' })}
                placeholder="Informe sua data de Nascimento"
            />
            
           <TouchableOpacity
            style={styles.botaoAuth}
            onPress={_onLoginPressed}
            >
                <Text style={styles.botaoText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}; 

export default Login;