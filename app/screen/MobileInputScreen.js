import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'


function MobileInputScreen(props) {
    const [number, onChangeNumber] = useState(null);

    return (
        <View>
            <View style={styles.mobileBox}>
                <Text style={styles.textTitle}>Enter Your Mobile Number to Continue</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Enter Contact Number"
                    keyboardType="numeric"
                />
                <TouchableOpacity style={styles.button}><Text style={{ fontSize: 16, color: '#fff' }}>Continue</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textTitle: {
        width: 250,
        color: '#32a89e',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 30
    },
    mobileBox: {
        marginVertical: 50,
        marginHorizontal: 40,
    },
    input: {
        height: 40,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    button: {
        borderRadius: 5,
        marginTop: 15,
        backgroundColor: '#a12323',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default MobileInputScreen;