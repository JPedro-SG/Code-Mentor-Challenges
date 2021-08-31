import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
// "file://"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const ImageFullScreen = props => {
    // console.log(props.route.params.path)
    const [showHeader, setShowHeader] = useState(true)
    const {path} = props.route.params
    // onPress={() => props.navigation.goBack()
    return (
        <View style={{flex: 1, backgroundColor: "#000"}}>
            {showHeader 
            ? 
            <View style={styles.header}>
                <Icon name='arrow-back' size={40} color="#fff" />
            </View>
            : false
            }
            <TouchableWithoutFeedback onPress={() => setShowHeader(!showHeader)}>
                <Image  source={{uri: "file://" + path}} style={{width: "100%", height:"100%", resizeMode: 'contain'}} />
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, .3)',
        flexDirection: 'row',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 50,
        marginLeft: 20,
        backgroundColor: 'orange',
    }
})

export default ImageFullScreen