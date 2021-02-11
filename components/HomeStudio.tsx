import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Switch } from 'react-native';


interface MyProps {

}

interface MyState {
    SalonSwitch: string,
    GarageSwitch: string,
    ChambreSwitch: string
}

class HomeStudio extends React.Component<MyProps, MyState> {

    constructor(props: MyProps) {
        super(props);
        this.state = {
            SalonSwitch: "OFF",
            GarageSwitch: "OFF",
            ChambreSwitch: "OFF",
        }
    }

    lightManager = async (room: string, mode: string) => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://mmidomotique.ddns.net/controleLed' + room + '.php', true);

        //Envoie les informations du header adaptées avec la requête
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function () { //Appelle une fonction au changement d'état.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log('Lumière de "' + room + '" : ' + mode);
            }
        }
        xhr.send("executer=" + mode);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={{width: 320, height: 240}} source={{uri: 'http://mmidomotique.ddns.net:8081/'}}/>
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
                <StatusBar style="auto" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        marginBottom : "65px",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default HomeStudio