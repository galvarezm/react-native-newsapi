import React from 'react';
import { SafeAreaView, View, Button, FlatList, Modal, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

// componentes
import ItemNew from './itemNew';

const ListNews = (props) => {

    const [ShowModal, setShowModal] = React.useState(false);
    const [UrlToOpen, setUrlToOpen] = React.useState('');

    const onNavigateToUrl = (url) => {
        setUrlToOpen(url);
        setShowModal(true);
    }

    return(
        <View style={{flex:1}}>

            <FlatList
                data={props.dataNews}
                renderItem={({item}) => <ItemNew key={item.id} item={item} onNavigateToUrl={onNavigateToUrl} />}
            />

            <Modal
                style={{
                    width           : Dimensions.get('window').width,
                    height          : Dimensions.get('window').height,
                    backgroundColor : 'white',
                }}
                visible               = {ShowModal}
                transparent           = {false}
                supportedOrientations = {['portrait', 'landscape']}
            >
                <SafeAreaView style={{flex:1}}>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={{width:'100%',height:'auto',backgroundColor:'black',flexDirection:'row',justifyContent:'flex-end'}}>
                            <Button title={'[x]Close'} color={'white'} onPress={() => {
                                setShowModal(false);
                            }}></Button>
                        </View>
                        <WebView
                            style={{flex:1,resizeMode:'cover'}}
                            source={{uri: UrlToOpen,cache:false}}
                            allowsInlineMediaPlayback={true}
                            javascriptEnabled={true}
                            allowFileAccess={true}
                            allowUniversalAccessFromFileURLs={true}
                            allowFileAccessFromFileURLs={true}
                            mixedContentMode="always"
                            scrollEnabled={true}
                        />
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    )
}

export default ListNews;