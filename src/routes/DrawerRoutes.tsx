import { createDrawerNavigator } from '@react-navigation/drawer';
// Importe as novas telas aqui
import HomeScreen from '../screens/HomeScreen';
import ContasPagarScreen from '../screens/ContasPagarScreen';
import ContasReceberScreen from '../screens/ContasReceberScreen';
import EntidadeScreen from '../screens/EntidadeScreen';
import AboutScreen from '../screens/AboutScreen';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator 
      screenOptions={{ 
        headerShown: true,
        // Estilo do cabeçalho (Top Bar)
        headerStyle: {
          backgroundColor: '#121212', 
          borderBottomWidth: 1,
          borderBottomColor: '#333',
        },
        headerTintColor: '#FFFFFF', // Cor do ícone hamburguer e título

        // Estilo da "gaveta" (a barra lateral em si)
        drawerStyle: {
          backgroundColor: '#121212',
          width: 280,
        },

        // Cores dos itens do menu
        drawerActiveTintColor: '#1E90FF',   // Cor do texto/ícone quando selecionado
        drawerInactiveTintColor: '#B0B0B0', // Cor do texto/ícone quando parado
        drawerActiveBackgroundColor: '#1E1E1E', // Fundo do item selecionado
        
        // Estilo do label (texto)
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '600',
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
      <Drawer.Screen name="Entidades" component={EntidadeScreen} options={{ title: 'Entidades' }} />
      <Drawer.Screen name="ContasPagar" component={ContasPagarScreen} options={{ title: 'Contas a Pagar' }} />
      <Drawer.Screen name="ContasReceber" component={ContasReceberScreen} options={{ title: 'Contas a Receber' }} />
      <Drawer.Screen name="Sobre" component={AboutScreen} options={{ title: 'Sobre o App' }} />
    </Drawer.Navigator>
  );
}