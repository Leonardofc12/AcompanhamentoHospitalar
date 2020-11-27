import React from 'react';
import Logo from '../../assets/sus-logo.png';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper'
import styles, {IconSearch} from './styles';
import { Procedimentos } from '../../pages/Prontuario';
import RNFetchBlob from 'rn-fetch-blob';


const ListProcedimentos: React.FC<Procedimentos> = ({ Procedimento }) => {
const Download = () => {
    const android = RNFetchBlob.android

    RNFetchBlob.config({
        addAndroidDownloads : {
            useDownloadManager : true,
            title : 'AcompanhamentoHospitalar.pdf',
            description : 'Acompanhamento Hospitalar',
            mime : 'application/pdf',
            mediaScannable : true,
            notification : true,
        }
        })
        .fetch('GET', `https://acompanhamentohospitalarapi.azurewebsites.net/Prontuarios/DownloadProcedimentos/${ Procedimento.id }`)
        .then((res) => {
            android.actionViewIntent(res.path(), 'application/pdf')
        })
    }
  return (
    <Card style={styles.mycard}>
        <View style={styles.cardView}>
            <Image
            style={{width:60,height:60,borderRadius:30}}
            source={Logo}
            
            />
            <View style={styles.row}>
                <View> 
                    <Text style={styles.textTitle}>{Procedimento.nomeProcedimento}</Text>   
                    <Text style={styles.text}>{Procedimento.dataRealizacao}</Text> 
                    <Text style={styles.text}>{Procedimento.funcionario}</Text> 
                </View>
                <IconSearch icon="download" size={30} color="#312e38"  onPress={Download}/>
            </View>
        </View>
     </Card>
  );
};

export default ListProcedimentos;