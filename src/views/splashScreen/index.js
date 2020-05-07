import React from 'react';
import Page from './page'

class SplashScreen extends React.Component {

    constructor(props){
        super();
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

export default SplashScreen;