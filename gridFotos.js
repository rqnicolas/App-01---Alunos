import {View, Text, Image, ScrollView} from 'react-native';
import casca from "../css/estilo";
export default function GridFotos(){
  return(
    <View style={casca.caixa1}>
      <ScrollView>
      <Text style={casca.texto}>Grid de Fotos</Text>
      </ScrollView>
    </View>
  )
}