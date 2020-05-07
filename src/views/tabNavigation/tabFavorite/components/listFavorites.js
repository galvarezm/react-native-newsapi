import React from 'react';
import { FlatList } from 'react-native';

// componentes
import ItemFavorite from './itemFavorite';

const ListFavorites = (props) => {
    return(
        <FlatList
            data={props.dataFavorite}
            renderItem={({item}) => <ItemFavorite key={item.id} item={item} onRemoveFavorite={props.onRemoveFavorite} />}
        />
    )
}

export default ListFavorites;