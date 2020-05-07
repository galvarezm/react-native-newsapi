import React from 'react';
import { View, Text, Button } from 'react-native';

const Page = (props) => {
    
    setTimeout(() => {
        props.onTime();
    }, 3000);

    return(
        <View 
            style={{
                flex:1,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'blue'
            }}
        >
            <Text style={{color:'white', fontSize:32.0}}>:: News App ::</Text>
        </View>
    )
}

export default Page;