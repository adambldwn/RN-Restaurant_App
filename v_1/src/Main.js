import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';


import { Button, RestaurantCard } from './components'

const Main = () => {
    const [restaurantData, setrestaurantData] = useState([]);
    const [isloading, setisloading] = useState(true);

    const fetchRestaurant = async () => {
        setisloading(true);
        const response = await axios.get('https://random-data-api.com/api/restaurant/random_restaurant')
        setrestaurantData(response.data);
        setisloading(false);
    }

    useEffect(() => {
        fetchRestaurant();
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    {
                        isloading ?
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <ActivityIndicator size="large" />
                            </View> :
                            <RestaurantCard data={restaurantData} />
                    }

                    <View>
                        <Button
                            title='Ara'
                            onSelect={() => fetchRestaurant()}
                        />
                    </View>

                </View>
            
        </SafeAreaView>
    )
}

export default Main;