import React from 'react';

import { AsyncStorage } from 'react-native';

// componentes
import Page from './page'

// redux
import { connect } from 'react-redux';
import * as typeActions from '../../redux/actions/typeActions';
import { initState } from '../../redux/actions/favoriteAction';

class SplashScreen extends React.Component {

    constructor(props){
        super();
    }

    async componentDidMount(){

        // obtenemos los favoritos guardados
        let localFavs = await AsyncStorage.getItem(typeActions.APP_NEWS_API_FAVORITES);
        if ( localFavs===null || localFavs===undefined ){
            await AsyncStorage.setItem(typeActions.APP_NEWS_API_FAVORITES, '[]');
            localFavs = [];
        }

        // enviamos el estado inicial de favoritos
        this.props.initState(JSON.parse(localFavs));

    }

    render(){
        return(
            <Page 
                navigation={this.props.navigation} 
                onTime={this.onTime}
            />
        )
    }

    onTime = () => {
        this.props.navigation.navigate("TabNavigation");
    }

}

// leer desde el store
const mapStateToProps = state => ({});

// enviar acciones al store
const mapDispatchToProps = {
    initState
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);