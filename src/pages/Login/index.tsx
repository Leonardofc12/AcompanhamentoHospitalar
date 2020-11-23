import React, { useRef, useCallback, useState } from 'react';
import { View, Image, KeyboardAvoidingView, ScrollView, Platform, ActivityIndicator} from 'react-native';
import { CodClienteValidator, dtNascimentoValidator } from '../../utils/core';
import { Container, Title } from './styles';
import Logo from '../../assets/sus-logo.png';
import Toast from 'react-native-toast-message';
import RootToast from '../../components/rootToast';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/auth';
import Button from '../../components/Button';
import Input from '../../components/Input';

interface LoginFormData {
    CodProntuario: Number;
    DtNascimento: string;
  }

const Login: React.FC = () => {

    const navigation = useNavigation();
    const formRef = useRef<FormHandles>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const { signIn, user } = useAuth();

    const handleSignIn = useCallback(async(data: LoginFormData) => {
        setLoading(true);
        
         if(data.CodProntuario == undefined && data.DtNascimento == undefined ) 
         {
            setLoading(false);   
            return;
         }
        const codClienteError = CodClienteValidator(data.CodProntuario);
        const dtNascimentoError = dtNascimentoValidator(data.DtNascimento);

        if (codClienteError || dtNascimentoError) {
            setLoading(false);
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Preencha os campos corretamente',
                text2: codClienteError + dtNascimentoError,
                visibilityTime: 4000,
                autoHide: true,
                topOffset: 30,
                bottomOffset: 40
            });
            return;
        }
        try {
            await signIn({ CodProntuario : data.CodProntuario, Senha: data.DtNascimento})
            .then((result) => {
                setLoading(false);
                navigation.navigate("Dashboard");
            }).catch((error) => {
                console.log(error)
                setLoading(false);
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Erro ao logar!',
                    text2: 'Não foi possível localizar o paciente.',
                    visibilityTime: 4000,
                    autoHide: true,
                    topOffset: 30,
                    bottomOffset: 40
                });
            });
        }
        catch(err) {
            console.log(err);
            setLoading(false);
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Erro ao acessar o servidor!',
                text2: 'Tente novamente mais tarde.',
                visibilityTime: 4000,
                autoHide: true,
                topOffset: 30,
                bottomOffset: 40
            });
        }
    }, [])

    return (
        <>
        <KeyboardAvoidingView style={{ flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
        <ScrollView contentContainerStyle={{ flex: 1}} keyboardShouldPersistTaps="handled">
            <Container>
                <RootToast></RootToast>
                <Title>Meu Prontuário</Title>
            <Image source={Logo} style={{ width: 100, height: 100}}/>
            <View> 
                <Title> Faça o seu login </Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignIn}>
                <Input name="CodProntuario" icon="user" placeholder="Informe seu código de atendimento" autoCorrect={false} autoCapitalize="none"/>
                <Input name="DtNascimento" icon="calendar" placeholder="Informe sua data de Nascimento"  autoCorrect={false} autoCapitalize="none"/>
            </Form>
            {
                !loading ?  <Button onPress={() => formRef.current?.submitForm()}> Entrar </Button> :
                <ActivityIndicator size="large" color="##91ffc8" />
            }
            </Container>
        </ScrollView>
        </KeyboardAvoidingView>
        </>
    )
}; 

export default Login;