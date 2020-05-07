import React from 'react';
import { View, Text } from 'react-native';

const LoadingMessage = () => {
    return(
        <View style={{flex:1,flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:24}}>Loading news...</Text>
        </View>
    )
}

export default LoadingMessage;