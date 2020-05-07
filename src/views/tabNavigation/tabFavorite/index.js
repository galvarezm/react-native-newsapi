import React from 'react';
import { SafeAreaView } from 'react-native';

// componentes
import Page from './page'
import LoadingMessage from '../../common/loadingMessage';

// redux
import { connect } from 'react-redux';
import { removeItem } from '../../../redux/actions/favoriteAction';

class TabFavorite extends React.Component {

    constructor(props){
        super();
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({isLoading: false});
        }, 500);
    }

    render(){
        console.log(this.props.dataFavorite);
        return(
            <SafeAreaView style={{flex:1}}>

                {this.state.isLoading && <LoadingMessage />}

                {!this.state.isLoading && this.props.dataFavorite && 
                <Page 
                    navigation={this.props.navigation} 
                    dataFavorite={this.props.dataFavorite}
                    onRemoveFavorite={this.onRemoveFavorite}
                />
                }

            </SafeAreaView>
        )
    }

    onRemoveFavorite = (id) => {
        console.log("recibo", id);
        this.props.removeItem(id);
    }

}

// leer desde el store
const mapStateToProps = state => ({
    dataFavorite: state.FavoriteReducer,
});

// enviar acciones al store
const mapDispatchToProps = {
    removeItem
};

export default connect(mapStateToProps, mapDispatchToProps)(TabFavorite);