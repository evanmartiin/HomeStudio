import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Switch, Alert, Button } from 'react-native';
import ShakeEventExpo from './ShakeEventExpo';

interface MyProps {

}

interface MyState { // Initialisation des variables globales et de la nature de l'information qu'elle contient (syntaxe TypeScript)
    SalonSwitch: string,
    GarageSwitch: string,
    ChambreSwitch: string,
    RGBSwitch: string,
    RGB2Switch: string,
    RGB3Switch: string,
    isAlertPresent: boolean
}

class HomeStudio extends React.Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = { // Initialisation des valeurs par défaut de chaque variable globale définie précédemment
            SalonSwitch: "OFF",
            GarageSwitch: "OFF",
            ChambreSwitch: "OFF",
            RGBSwitch: "OFF",
            RGB2Switch: "OFF",
            RGB3Switch: "OFF",
            isAlertPresent: false
        }
    }

    async componentDidMount() { // Lorsque le composant a été ajouté au DOM virtuel, on lance une fonction
        ShakeEventExpo.addListener(() => { // Détection lorsqu'on secoue son téléphone, via la librairie expo-sensors
            if (!this.state.isAlertPresent) { // Vérification si une alerte est déjà présente sur l'écran, pour ne pas surcharger
                this.setState({ isAlertPresent: true });
                Alert.alert(
                    "Éteindre",
                    "Voulez-vous éteindre toutes les lumières ?",
                    [
                        {
                            text: "Annuler", // Bouton pour annuler l'extinction totale des lumières
                            style: "cancel",
                            onPress: () => {
                                this.setState({ isAlertPresent: false });
                            }
                        },
                        {
                            text: "Confirmer", // Bouton pour confirmer l'extinction totale des lumières
                            onPress: () => {
                                this.lightManager("Salon", "OFF");
                                this.setState({ SalonSwitch: "OFF" });
                                this.lightManager("Garage", "OFF");
                                this.setState({ GarageSwitch: "OFF" });
                                this.lightManager("Chambre", "OFF");
                                this.setState({ ChambreSwitch: "OFF" });
                                this.lightManager("RGB", "OFF");
                                this.setState({ RGBSwitch: "OFF" });
                                this.lightManager("RGB2", "OFF");
                                this.setState({ RGB2Switch: "OFF" });
                                this.lightManager("RGB3", "OFF");
                                this.setState({ RGB3Switch: "OFF" });
                                this.setState({ isAlertPresent: false });
                            }
                        }
                    ],
                    { cancelable: false }
                );
            }
        });

        // Code semi-fonctionnel pour récupérer l'état des LEDs, en cours de développement...

        // var xhr = new XMLHttpRequest();
        // xhr.open("POST", 'http://mmidomotique.ddns.net/controleLedChambre.php', true);

        // //Envoie les informations du header adaptées avec la requête
        // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        // xhr.onreadystatechange = function () { //Appelle une fonction au changement d'état.
        //     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        //         console.log(xhr.response);
        //     }
        // }
        // xhr.send("executer=state");
    }

    componentWillUnmount() { // Lorsque le composant va être retiré du DOM virtuel, on désactive la détection des mouvements du téléphone
        ShakeEventExpo.removeListener();
    }

    lightManager = async (room: string, mode: string) => { // Fonction gérant les modes ON/OFF de chaque LED individuellement
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://mmidomotique.ddns.net/controleLed' + room + '.php', true); // Définition de la cible de la requête Http

        //Envoie les informations du header adaptées avec la requête
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // Déclaration du type de contenu envoyé dans la requête

        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) { // Lorsque la requête a abouti et que le serveur distant a confirmé la réception
                console.log('Lumière de "' + room + '" : ' + mode);
            }
        }
        xhr.send("executer=" + mode); // Envoi final de la requête, contenant les données à envoyer
    }

    render() { // Vue de l'application
        return (
            <View style={styles.container}>
                <Image source={{ uri: 'http://mmidomotique.ddns.net:8081/', cache: 'reload' }} style={{ width: 384, height: 216 }} />
                <Text>Salon</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#767577" }}
                    thumbColor={this.state.SalonSwitch === "ON" ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        this.state.SalonSwitch === "ON" ? this.lightManager("Salon", "OFF") : this.lightManager("Salon", "ON");
                        this.state.SalonSwitch === "ON" ? this.setState({ SalonSwitch: "OFF" }) : this.setState({ SalonSwitch: "ON" });
                    }}
                    value={this.state.SalonSwitch === "ON" ? true : false}
                />
                <Text>Garage</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#767577" }}
                    thumbColor={this.state.GarageSwitch === "ON" ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        this.state.GarageSwitch === "ON" ? this.lightManager("Garage", "OFF") : this.lightManager("Garage", "ON");
                        this.state.GarageSwitch === "ON" ? this.setState({ GarageSwitch: "OFF" }) : this.setState({ GarageSwitch: "ON" });
                    }}
                    value={this.state.GarageSwitch === "ON" ? true : false}
                />
                <Text>Chambre</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#767577" }}
                    thumbColor={this.state.ChambreSwitch === "ON" ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        this.state.ChambreSwitch === "ON" ? this.lightManager("Chambre", "OFF") : this.lightManager("Chambre", "ON");
                        this.state.ChambreSwitch === "ON" ? this.setState({ ChambreSwitch: "OFF" }) : this.setState({ ChambreSwitch: "ON" });
                    }}
                    value={this.state.ChambreSwitch === "ON" ? true : false}
                />
                <View style={styles.rgb}>
                    <Text>Rouge</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#767577" }}
                        thumbColor={this.state.RGBSwitch === "ON" ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {
                            this.state.RGBSwitch === "ON" ? this.lightManager("RGB", "OFF") : this.lightManager("RGB", "ON");
                            this.state.RGBSwitch === "ON" ? this.setState({ RGBSwitch: "OFF" }) : this.setState({ RGBSwitch: "ON" });
                        }}
                        value={this.state.RGBSwitch === "ON" ? true : false}
                    />
                    <Text>Vert</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#767577" }}
                        thumbColor={this.state.RGB2Switch === "ON" ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {
                            this.state.RGB2Switch === "ON" ? this.lightManager("RGB2", "OFF") : this.lightManager("RGB2", "ON");
                            this.state.RGB2Switch === "ON" ? this.setState({ RGB2Switch: "OFF" }) : this.setState({ RGB2Switch: "ON" });
                        }}
                        value={this.state.RGB2Switch === "ON" ? true : false}
                    />
                    <Text>Bleu</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#767577" }}
                        thumbColor={this.state.RGB3Switch === "ON" ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => {
                            this.state.RGB3Switch === "ON" ? this.lightManager("RGB3", "OFF") : this.lightManager("RGB3", "ON");
                            this.state.RGB3Switch === "ON" ? this.setState({ RGB3Switch: "OFF" }) : this.setState({ RGB3Switch: "ON" });
                        }}
                        value={this.state.RGB3Switch === "ON" ? true : false}
                    />
                </View>
                <StatusBar style="auto" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        marginBottom: 65,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rgb: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0
    }
});

export default HomeStudio