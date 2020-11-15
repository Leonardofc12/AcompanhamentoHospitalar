import React, { useEffect, useState, useCallback} from 'react';
import { Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import { Container, Title, ContentRestaurant, ViewContent, ViewHeader, Content, TextHeader, FilterView, FilterText} from './styles';

import { useNavigation } from '@react-navigation/native';
import ListProcedimentos from '../../components/ListProcedimentos';
import Icon from 'react-native-vector-icons/FontAwesome';
import Categorias from '../../components/Categorias';

const Prontuario : React.FC = () => {

  const navigation = useNavigation();

  useEffect(() => {
    //open();
    //navigation.setOptions({ title: 'Updated!' })
  },[]);


    return (
        <Container>
          <Content> 
          <ContentRestaurant>
            <ViewContent>
              <TextHeader> Paciente: Leonardo Figueiredo Costa </TextHeader> 
              <TextHeader> Data Nascimento: 12/03/1999  </TextHeader> 
            </ViewContent> 
          </ContentRestaurant>
            <ViewHeader>
              <Title> Procedimentos </Title>
            </ViewHeader> 
            
            <FilterView>
                <FilterText placeholder="Pesquisar" placeholderTextColor="#000"></FilterText>
                <Icon name="search" size={30} color="#312e38"/>
            </FilterView>
            {/* <Categorias/> */}
            <ListProcedimentos />
          </Content>         
        </Container>
    )
}
    

export default Prontuario;