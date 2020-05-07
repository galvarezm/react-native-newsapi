import { createStore, combineReducers } from 'redux';

// importar los reducers
import FavoriteReducer from './reducers/favoriteReducer';

// creamos los reducers (encargados de administrar los estados)
const reducers = combineReducers({
    FavoriteReducer,
});

// creamos el almacen de datos
const store = createStore(
    reducers,
);

// dejamos disponible el nuevo almacen
export default store;