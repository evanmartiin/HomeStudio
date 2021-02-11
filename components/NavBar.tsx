import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

class NavBar extends React.Component {

    _menu = (message: string) => {
        alert(message);
    }
    
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.item}><Button title="Accueil" onPress={() => {this._menu("Accueil")}} /></View>
                <View style={styles.item}><Button title="Ajouter" onPress={() => {this._menu("Ajouter")}} /></View>
                <View style={styles.item}><Button title="Profil" onPress={() => {this._menu("Profil")}} /></View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '10%',
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
});


export default NavBar