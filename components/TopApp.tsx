import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function TopApp() {
    return (
        <View>
            <View style={styles.flexTopApp}>
                <Image style={styles.logoTopApp} source={require('../assets/logo.png')} />
                <Image style={styles.imgUser} source={require('../assets/img_user.png')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logoTopApp: {
        width: "100px",
        height: "60px",
    },

    imgUser: {
        width: "30px",
        height: "30px",
    },

    flexTopApp: {
        display: "flex",
        flexDirection: "initial",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "15px",
        backgroundColor: "#EFEFEF",
        padding: "15px",
    }
});