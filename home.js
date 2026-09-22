import { View, Text, ScrollView, Button } from 'react-native';
import casca from '../css/estilo';

export default function Home({ navigation }) {
  return (
    <View style={casca.caixa1}>
      <ScrollView>
        <Text style={casca.titulo1}>App 01 - Alunos</Text>

        <Button
          title="Grade de fotos"
          onPress={() => navigation.navigate('GF')}
        />

        <Button
          title="Vendas"
          onPress={() => navigation.navigate('VD')}
        />

        <Button
          title="Sobre"
          onPress={() => navigation.navigate('SO')}
        />

        <Button
          title="Contato"
          onPress={() => navigation.navigate('CTT')}
        />
      </ScrollView>
    </View>
  );
}
