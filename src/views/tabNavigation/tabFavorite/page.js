import React from 'react';

import ListFavorites from './components/listFavorites';

const Page = (props) => {
    return(
        <ListFavorites dataFavorite={props.dataFavorite} onRemoveFavorite={props.onRemoveFavorite} />
    )
}

export default Page;