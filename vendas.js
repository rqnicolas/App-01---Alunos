import {View, Text, Image, ScrollView} from 'react-native';
import casca from "../css/estilo";
export default function Vendas(){
  return(
    <View style={casca.caixa1}>
      <ScrollView>
      <Text style={casca.texto}>Vendas da empresa</Text>
      </ScrollView>
    </View>
  )
}