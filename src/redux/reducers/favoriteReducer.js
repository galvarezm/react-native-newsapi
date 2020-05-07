import { AsyncStorage } from 'react-native';

// constantes de acción
import * as typeActions from '../actions/typeActions';

const defaultState = [];

// esta función se encarga de mantener el estado de este reducer
function reducer(state = defaultState, { type, payload }) {

    // inicializar estado desde la base local del celular
    if ( type === typeActions.ACTION_NEWS_FAVORITE_INI ){
        return payload;
    }

    // añadir un favorito
    if ( type === typeActions.ACTION_NEWS_FAVORITE_ADD ){
        let tmpState = [...state];
        const newItem = {
            'id':          state.length+1,
            'name':        payload.name,
            'category':    payload.category,
            'language':    payload.language,
            'country':     payload.country,
            'description': payload.description,
            'url':         payload.url,
        };
        tmpState.push(newItem);

        // actualizar estado local
        AsyncStorage.setItem(typeActions.APP_NEWS_API_FAVORITES, JSON.stringify(tmpState));

        return tmpState;
    }

    // quitar un favorito
    if ( type === typeActions.ACTION_NEWS_FAVORITE_DEL ){
        let tmpState = [...state].filter(item => item.id !== payload);

        // actualizar estado local
        AsyncStorage.setItem(typeActions.APP_NEWS_API_FAVORITES, JSON.stringify(tmpState));

        return tmpState;
    }

    // retornar el actual listado
    return state;

}

export default reducer;