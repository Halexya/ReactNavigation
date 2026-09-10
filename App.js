import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './Home';
import Senna from './Senna';
import Pilotos from './Pilotos';
import Equipes from './Equipes';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: '#111111',
          },
          headerTintColor: '#e10600',
          tabBarActiveTintColor: '#e10600',
          tabBarInactiveTintColor: 'gray',


          tabBarStyle: {
            height: 60,
            paddingBottom: 5,
            backgroundColor: '#111111',
            borderTopColor: '#222222',
          },

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Início') {
              iconName = focused ? 'home' : 'home-outline';
            }
            else if (route.name === 'Ayrton Senna') {
              iconName = focused ? 'flag' : 'flag-outline';
            }
            else if (route.name === 'Pilotos') {
              iconName = focused ? 'person' : 'person-outline';
            }
            else if (route.name === 'Equipes') {
              iconName = focused ? 'car-sport' : 'car-sport-outline';
            }

            return (
              <Ionicons name={iconName} size={size} color={color} />
            );
          },
        })}
      >
        <Tab.Screen name="Início" component={Home} />
        <Tab.Screen name="Pilotos" component={Pilotos} />
        <Tab.Screen name="Equipes" component={Equipes} />
        <Tab.Screen name="Ayrton Senna" component={Senna} />
      </Tab.Navigator>

      <StatusBar style="light" />
    </NavigationContainer>
  );
}