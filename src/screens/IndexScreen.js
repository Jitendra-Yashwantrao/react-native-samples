import React, { useContext } from "react"
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native"
import { Context as BlogContext } from '../context/BlogProvider'
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {

    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

    return (<View>

        <Button onPress={addBlogPost} title='Add Post' ></Button>
        <FlatList
            data={state}
            keyExtractor={blogPost => blogPost.title}
            renderItem={
                ({ item }) => {
                    return <View style={styles.row}>
                        <Text style={styles.title} > {item.title}</Text>
                        <TouchableOpacity onPress={ () =>deleteBlogPost(item.id)}>
                        <Feather style={styles.icon} name='trash' />
                        </TouchableOpacity>
                    </View>;
                }
            }>

        </FlatList>
    </View>);
};

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical:20,
        borderTopWidth: 1,
        borderBottomWidth:1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});
export default IndexScreen;