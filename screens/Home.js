import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { TaskCard } from '../components/TaskCard';
import HomeHeader from '../components/HomeHeader';


const Home = () => {

    // Fetching data from api endpoint
    const uri = 'https://4inexpo-backend.ibrew-hub.com/users/test';
    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            const response = await fetch(uri);
            const json = await response.json();
            setData(json);

            return json;
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#EDE9E9",
        }}>
            {/* Loading Header */}
            <View>
                <HomeHeader />
            </View>

            {/* Loading Task Componets */}
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <TaskCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
            
        </SafeAreaView>
    )
}

export default Home