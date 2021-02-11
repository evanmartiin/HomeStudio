import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';

class NavBar extends React.Component {

    _menu = (message: string) => {
        alert(message);
    }
    
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.item}> 
                  <Image style={styles.accueil} source={require('../assets/accueil.png')} onPress={() => {this._menu("Accueil")}} />
                </View>

                <View style={styles.item}> 
                  <Image style={styles.accueil} source={require('../assets/ajouter.png')} onPress={() => {this._menu("Ajouter")}} />
                </View>

                <View style={styles.item}> 
                  <Image style={styles.accueil} source={require('../assets/automatique.png')} onPress={() => {this._menu("Profil")}} />
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
    height: '65px',
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
    width: "30px",
    height: "30px",
  },
});


export default NavBar