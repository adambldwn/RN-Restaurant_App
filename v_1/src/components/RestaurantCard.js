import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const RestaurantCard = (props) => {
    return (
        <View>
            <Text style={styles.text}>Restaurant</Text>
            <View style={styles.container}>

                <Text style={{fontWeight: 'bold', color: 'red'}}>{props.data.name}</Text>
                <Image
                    style={styles.image}
                    source={{ uri: props.data.logo }}
                />
                <Text numberOfLines={3}>{props.data.description}</Text>
            </View>
        </View>
    )
}

export { RestaurantCard }

const styles = StyleSheet.create({
    container: {

        borderWidth: 1,
        borderColor: '#90a4ae',
        borderRadius: 10,
        margin: 10,
        padding: 5,
    },
    image: {
        height: Dimensions.get('window').height * 0.5,
        resizeMode: 'contain'
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'italic',
        fontSize: 45
    }
}) 