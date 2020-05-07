import React from 'react';
import {SafeAreaView} from 'react-native';

// componentes
import Page from './page';
import LoadingMessage from '../../common/loadingMessage';

import API from '../../../services/api';

// redux
import { connect } from 'react-redux';
import { addItem } from '../../../redux/actions/favoriteAction';

class TabNews extends React.Component {

    constructor(props){
        super();
        this.state = {
            dataNews:  [],
            isLoading: true,
        };
    }

    async componentDidMount(){

        const lastNews = await API.getNews();

        // refrescar datos
        this.setState({
            dataNews:  lastNews,
        }, () => {
            setTimeout(()=>{
                this.setState({isLoading: false});
            }, 500);
        });

    }

    render(){
        return(
            <SafeAreaView style={{flex:1}}>

                {this.state.isLoading && <LoadingMessage />}

                {!this.state.isLoading && 
                <Page 
                    dataNews={this.state.dataNews}
                    navigation={this.props.navigation} 
                    onAddFavorite={this.onAddFavorite}
                />
                }

            </SafeAreaView>
        )
    }

    onAddFavorite = (itemFav) => {
        this.props.addItem({
            'name':        itemFav.name,
            'category':    itemFav.category,
            'language':    itemFav.language,
            'country':     itemFav.country,
            'description': itemFav.description,
            'url':         itemFav.url,
        });
    }

}

// leer desde el store
const mapStateToProps = state => ({});

// enviar acciones al store
const mapDispatchToProps = {
    addItem
};

export default connect(mapStateToProps, mapDispatchToProps)(TabNews);