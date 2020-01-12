import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ListItem, Image, ActivityIndicator } from 'react-native';

// import { List, ListItem} from 'react-native';

const UserScreen = () => {

    const [state, setResults] = useState({
        data: [],
        page: 0,
        loading: false,
    });

    useEffect(() => {

        console.log('use effect got called')
        fetchData(0);
        //console.log("data", state.data)
    }, []);

    fetchData = async (pageno) => {

        console.log('pageno',pageno)

        const response = await fetch(`https://randomuser.me/api?results=10&seed=hi&page=${pageno}`)
        const json = await response.json()
        setResults({
            data: [...state.data, ...json.results],
            page: pageno,
            loading: true,
        })
        state.loading=false
    }

    HandleEnd = () => {

        console.log('HandleEnd got called')
        fetchData(state.page + 1)
        //console.log(" HandleEnd data", state.data)

    }

    return (
        <View>
            <Text>hi there</Text>
            {/* <List>
                <FlatList
                    keyExtractor={(x, i) => i}
                    data={state.data}
                    renderItem={({ item }) => {
                        return (<ListItem
                            roundAvatar
                            avatar={{ uri: item.picture.thumbnail }}
                            title={`${item.name.first}  ${item.name.last}`}

                        />)
                    }}
                />
            </List> */}
            <FlatList
                keyExtractor={(x, i) => i}
                data={state.data}
                onEndReached={HandleEnd}
                onEndReachedThreshold={0}
                ListFooterComponent={()=>
                //state.loading?null:<ActivityIndicator animating size="large" />}
                <ActivityIndicator animating size="large" />}
                renderItem={({ item }) => {
                    // return (<ListItem
                    //     roundAvatar
                    //     avatar={{ uri: item.picture.thumbnail }}
                    //     title={`${item.name.first}  ${item.name.last}`} />);
                    return (
                        <View>
                            {/* <Image source = { uri: {`${item.picture.thumbnail}`} } > </Image> */}
                            <Image source={{ uri: `${item.picture.thumbnail}` }}
                                style={{ width: 40, height: 40 }} />
                            <Text style={styles.textStyle}>
                                {item.name.first} -  {item.name.last}
                            </Text>
                        </View>
                    );
                }}
            />

        </View>
    );
};


const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
});

export default UserScreen;
