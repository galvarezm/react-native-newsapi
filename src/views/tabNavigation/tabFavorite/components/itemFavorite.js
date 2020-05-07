import React from 'react';
import {View, Text, Button, Image} from 'react-native';

const ItemFavorite = (props) => {
    const { item } = props;
    return(
        <View 
            style={{
                width:'98%',
                height:'auto',
                marginVertical:5,
                marginHorizontal:5,
                paddingVertical:5,
                paddingHorizontal:5,
                borderRadius:6,
                borderColor:'blue',
                borderWidth:1.0,
            }}
        >
            <View style={{width:'100%',height:30,flexDirection:'row'}}>
                <Text>Fuente: {item.name}</Text>
                <Text> | </Text>
                <Text>Categoría: {item.category}</Text>
            </View>
            <View style={{width:'100%',height:30,flexDirection:'row'}}>
                <Text>Lenguaje: {item.language}</Text>
                <Text> | </Text>
                <Text>País: {item.country}</Text>
            </View>
            <View style={{width:'100%',height:'auto',flexDirection:'column'}}>
                <Text>{item.description}</Text>
                <Text style={{textDecorationLine:'underline',textDecorationColor:'blue',color:'blue'}}>{item.url}</Text>
                <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
                    <Image source={require('../../../../assets/btn_add_to_fav.png')} style={{width:24,height:24}} />
                    <Button color={'orange'} title={'Remove'} onPress={() => {
                        props.onRemoveFavorite(item.id);
                    }}></Button>
                </View>
            </View>
        </View>
    )
}

export default ItemFavorite;