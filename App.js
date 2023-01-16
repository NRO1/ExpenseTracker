import { StatusBar } from "expo-status-bar";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExp from "./screens/ManageExp";
import AllExp from "./screens/AllExp";
import RecentExp from "./screens/RecentExp";
import {Colors} from './colors/style';
import { Ionicons } from '@expo/vector-icons';
import IconButton from "./components/UI/IconButton";
import ExpContextProvider from './store/exp-context';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator screenOptions={ ({ navigation }) => ({
      headerStyle: { backgroundColor: Colors.primary500},
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: Colors.primary500},
      tabBarActiveTintColor: Colors.accent500,
      headerRight: ({tintColor}) => (<IconButton icon="add" size={30} color={tintColor} onPress={() => {
        navigation.navigate('ManageExp');
      }} />)
    })}>
      <BottomTabs.Screen name="RecentExp" component={RecentExp} options={{
        title: 'Recent Expenses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="hourglass" size={size} color={color} />
        )
      }}/>
      <BottomTabs.Screen name="AllExp" component={AllExp} options={{
        title: 'All Expenses',
        tabBarLabel: 'All Expenses',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="calendar" size={size} color={color} />
        )
      }}/>
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500},
          headerTintColor: 'white'
          }}>
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} options={{
            headerShown: false
          }} />
          <Stack.Screen name="ManageExp" component={ManageExp} options={{
            presentation: 'modal'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
      </ExpContextProvider>
    </>
  );
}
