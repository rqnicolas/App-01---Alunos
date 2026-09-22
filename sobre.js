import {View, Text, Image, ScrollView} from 'react-native';
import casca from "../css/estilo";
export default function Contato(){
  return(
    <View style={casca.caixa1}>
      <ScrollView>
      <Text style={casca.texto}>Sobre a Empresa</Text>
      </ScrollView>
    </View>
  )
}