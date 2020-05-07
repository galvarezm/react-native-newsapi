import React from 'react';

// navegacion
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// vistas de los tabs
import TabNews     from './tabNews';
import TabFavorite from './tabFavorite';

// tab
const BottomTab = createBottomTabNavigator();

// UI
const Page = (props) => {
    return(
		<BottomTab.Navigator>

			<BottomTab.Screen 
				name="TabNews" 
				component={TabNews} 
				listeners={{
					tabPress: e => props.navigation.setOptions({ title: 'News' })
				}}
			/>

			<BottomTab.Screen 
				name="TabFavorite" 
				component={TabFavorite} 
				listeners={{
					tabPress: e => props.navigation.setOptions({ title: 'Favorite' })
				}}
			/>

		</BottomTab.Navigator>
    )
}

export default Page;