import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'


function BloodGroupScreen(props) {
    const [selectedId, setselectedId] = useState(null);


    const [blood, setblood] = useState([
        { blood: 'O-', key: '1' },
        { blood: 'O+', key: '2' },
        { blood: 'A-', key: '3' },
        { blood: 'A+', key: '4' },
        { blood: 'B-', key: '5' },
        { blood: 'B+', key: '6' },
        { blood: 'AB-', key: '7' },
        { blood: 'AB+', key: '8' },
    ]);

    const SelectBloodHandler = (key) => {
       setselectedId(key);
    }

    return (
        <View>
            <View style={styles.mobileBox}>
                <Text style={styles.textTitle}>Select Your Blood Group</Text>
                <FlatList data={blood}
                    numColumns='2'
                    renderItem={renderItem = ({ item }) =>
                        <View style={styles.bloodBox}>
                            <TouchableOpacity key={item.key} style={[styles.defaultBloodBox, selectedId === item.key ? styles.selectedBloodBox : styles.defaultBloodBox]}>
                                <Text style={[styles.defaultText, selectedId === item.key ? styles.selectedText : styles.defaultText]} onPress={() => SelectBloodHandler(item.key)}>{item.blood}</Text>
                            </TouchableOpacity>
                        </View>

                    } />
                <TouchableOpacity style={styles.button}><Text style={{ fontSize: 16, color: '#fff' }}>Next</Text></TouchableOpacity>
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
    button: {
        borderRadius: 5,
        marginTop: 15,
        backgroundColor: '#a12323',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bloodBox: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    defaultBloodBox:{
        paddingVertical: 20,
        backgroundColor: '#ddd', 
        margin: 10,
        width: 120,
        borderRadius: 8
    },
    selectedBloodBox:{
       backgroundColor:'#000'
    },
    defaultText:{
        textAlign: 'center',
        fontSize: 18, 
        fontWeight: 'bold',
        color:'#000'
    },
    selectedText:{
        color:'#fff'
    }
});


export default BloodGroupScreen;