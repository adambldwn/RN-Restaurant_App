import React from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from 'react-native';

const Button = (props) => {
    return(
        
            <TouchableOpacity style={styles.container} onPress={() => props.onSelect()} >
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        
    )
}

export {Button};

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#1976d2',
        padding: 5,
        margin: 10,
        marginBottom: 30,
        borderRadius:10,
        
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
})