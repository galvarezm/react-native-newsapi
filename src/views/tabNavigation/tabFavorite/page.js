import React from 'react';
import { View, Text, Button } from 'react-native';

const Page = (props) => {
    
    return(
        <View 
            style={{
                flex:1,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
            }}
        >
            <Text>Tab Favorite</Text>
        </View>
    )
}

export default Page;