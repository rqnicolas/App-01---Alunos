import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Vendas from './janelas/vendas';
import GridFotos from './janelas/gridFotos';
import Contato from './janelas/contato';
import Sobre from './janelas/sobre';
import Home from './janelas/home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HO">
        <Stack.Screen name="VD" component={Vendas} />
        <Stack.Screen name="HO" component={Home} />
        <Stack.Screen name="SO" component={Sobre} />
        <Stack.Screen name="GF" component={GridFotos} />
        <Stack.Screen name="CTT" component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
