import React, { useCallback, useEffect, useState } from 'react';
import { View, Text} from 'react-native';
import styles, { AlignLogo, Container, Content, ItemImage, TextHeader, Title, ViewContent, ViewHeader } from './styles';
import Logo from '../../assets/Person-Logo-1.png';
import Button from '../../components/Button';
import api from '../../services/api';
import { useRoute } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

export interface Usuario {
  id: string;
  nome: string;
  vonvenio: string;
  dataNascimento: string;
  naturalidade: string;
  observacoes: string;
  sexo: string;
}

const Perfil : React.FC = () => {
  const { user } = useAuth(); 
  const [loading, setLoading] = useState<boolean>();
  const [listData, setListData] = React.useState<Usuario[]>([]);
  const [figure, setFigure] = useState<boolean>(false);
  
  const loadPerfil = () => {
    setLoading(true);
    api.get(`Usuario/GetDadosPessoais/${user.id}`)
    .then(response => {
        setListData(response.data);
        setLoading(false);
      });
   }
   
  useEffect(() => {
    loadPerfil();
  },[])

    return (
        <Container>
            <Content>
            <ViewHeader style={{paddingTop: 25, paddingBottom: 25}}>
              <Title> Meu Perfil </Title>
            </ViewHeader>
              <AlignLogo>
                <ItemImage source={Logo} />
              </AlignLogo>
              {
                listData &&
                <ViewContent>

                    <TextHeader> Paciente: {listData.nome} </TextHeader> 
                    <TextHeader> Data Nascimento: {listData.dataNascimento}  </TextHeader> 
                    <TextHeader> Convênio: {listData.convenio}</TextHeader> 
                    <TextHeader> Sexo: {listData.sexo}</TextHeader> 
                    <TextHeader> Naturalidade: {listData.naturalidade}</TextHeader> 
                    <TextHeader> Observações: {listData.observacoes}</TextHeader> 
                  </ViewContent> 
              }
            </Content>
            <Button style={{ backgroundColor: '#FE2E2E' }}> Sair </Button>
      </Container>
    )
}; 

export default Perfil;