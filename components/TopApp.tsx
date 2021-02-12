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
        width: 100,
        height: 60,
    },

    imgUser: {
        width: 30,
        height: 30,
    },

    flexTopApp: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
        backgroundColor: "#EFEFEF",
        padding: 15,
    }
});