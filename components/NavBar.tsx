import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image, Alert } from 'react-native';

class NavBar extends React.Component {
    _menu = (message: string) => { // Fonction affichant une alerte personnalisée, pour chaque fonctionnalité non-développée du menu
        Alert.alert(message, "Cette fonctionnalité n'est pas encore disponible.");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <TouchableOpacity onPress={() => this._menu('Accueil')}><Image style={styles.accueil} source={require('../assets/accueil.png')} /></TouchableOpacity>
                </View>

                <View style={styles.item}>
                    <TouchableOpacity onPress={() => this._menu('Ajouter')}><Image style={styles.accueil} source={require('../assets/ajouter.png')} /></TouchableOpacity>
                </View>

                <View style={styles.item}>
                    <TouchableOpacity onPress={() => this._menu('Mode Automatique')}><Image style={styles.accueil} source={require('../assets/automatique.png')} /></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 65,
        backgroundColor: 'lightgray',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    item: {
        width: '33%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    accueil: {
        width: 30,
        height: 30,
    },
});

export default NavBar