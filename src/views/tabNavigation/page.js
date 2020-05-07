import React from 'react';

// UI
import {Image} from 'react-native';

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
				name="News" 
				component={TabNews} 
				listeners={{
					tabPress: e => props.navigation.setOptions({ title: 'News' })
				}}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Image source={require('../../assets/tab_news.png')} style={{width:24,height:24}} />
					)
				}}
			/>

			<BottomTab.Screen 
				name="Favorite" 
				component={TabFavorite} 
				listeners={{
					tabPress: e => props.navigation.setOptions({ title: 'Favorite' })
				}}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Image source={require('../../assets/tab_favorite.png')} style={{width:24,height:24}} />
					)
				}}
			/>

		</BottomTab.Navigator>
    )
}

export default Page;