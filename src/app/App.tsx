import 'react-native-gesture-handler'; // IMPORTANTE: Deve ser a primeira linha
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppRoutes from "../routes/AppRoutes";

export default function App() {
  return (
    // O flex: 1 garante que o container de gestos ocupe a tela toda
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}