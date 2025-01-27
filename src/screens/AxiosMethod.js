import { View, Text, FlatList, Dimensions, StyleSheet, ActivityIndicator,TouchableOpacity } from "react-native";
import axios from 'axios';
import { useEffect, useState } from "react";

const AxiosMethod = () => {
    const [loading, setLoading] = useState(false)

    const [fromAxios, setFromAxios] = useState(false)

    const [axiosData, setAxiosData] = useState(null);


    const goForAxios = () => {

        setLoading(true);

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log('getting data from axios', response.data);
                setTimeout(() => {
                    setLoading(false);
                    setAxiosData(response.data);
                }, 2000)
            })
            .catch(error => {
                console.log(error);
            });
    };


    useEffect(() => {
        goForAxios();
    }, []);

    const renderItem = (data) => {
        return (
            <TouchableOpacity style={styles.list}>
                <Text style={styles.lightText}>{data.item.name}</Text>
                <Text style={styles.lightText}>{data.item.email}</Text>
                <Text style={styles.lightText}>{data.item.company.name}</Text></TouchableOpacity>
        )

    }

    return (
        <View>

            {loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text style={{ fontSize: 16, color: 'red' }}>Loading Data...</Text>
                </View>
            }
            <FlatList
                data={axiosData}
                renderItem={item => renderItem(item)}
                keyExtractor={item => item.id.toString()}
            />


        </View>
    );
};

const deviceHeight = Dimensions.get('screen').height


const styles = StyleSheet.create({

    parentContainer: {
        height: deviceHeight,
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 32
    },
    container: {
        backgroundColor: "#fff"
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    list: {
        paddingVertical: 4,
        margin: 5,
        backgroundColor: "#fff"
    }
});


export default AxiosMethod;