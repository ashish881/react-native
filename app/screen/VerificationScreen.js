import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'


function VerificationScreen(props) {
    const [number, onChangeNumber] = useState(null);

    return (
        <View>
            <View style={styles.mobileBox}>
                <Text style={styles.textTitle}>Enter Verification Code</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Enter Verification Code"
                    keyboardType="numeric"
                />
                <TouchableOpacity style={styles.button}><Text style={{ fontSize: 16, color: '#fff' }}>Verify</Text></TouchableOpacity>
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


export default VerificationScreen;