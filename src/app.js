import React from 'react';

// navegacion
import { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator }  from '@react-navigation/stack';

// vistas
import SplashScreen  from './views/splashScreen';
import TabNavigation from './views/tabNavigation';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';

// pila inicial de vistas
const AppStack = createStackNavigator();

// función principal o root
const App = () => {
	return(
		<Provider store={store}>
			<NavigationContainer>
				<AppStack.Navigator initialRouteName="SplashScreen">

					<AppStack.Screen 
						name="SplashScreen" 
						component={SplashScreen} 
						options={{
							headerShown: false,
							gestureEnabled: false,
						}}
					/>

					<AppStack.Screen 
						name="TabNavigation" 
						component={TabNavigation} 
						options={{
							headerShown: false,
							gestureEnabled:false,
						}}
					/>

				</AppStack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}

export default App;