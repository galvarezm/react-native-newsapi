import * as typeActions from './typeActions';

// inicializar estado de favoritos
export const initState = (value) => ({
    type:    typeActions.ACTION_NEWS_FAVORITE_INI,
    payload: value,
});

// agregar un item a favoritos
export const addItem = (value) => ({
    type:    typeActions.ACTION_NEWS_FAVORITE_ADD,
    payload: value,
});

// quitar un item de favoritos
export const removeItem = (id) => ({
    type:    typeActions.ACTION_NEWS_FAVORITE_DEL,
    payload: id,
});
