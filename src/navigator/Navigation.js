import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartItem from '../components/cartItem';
import AllData from '../components/allData';

const Stack = createNativeStackNavigator();
export default RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AllData"
          component={AllData}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CartData"
          component={CartItem}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
