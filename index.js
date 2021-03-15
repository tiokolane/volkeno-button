import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
const ButtonVolkeno = ({textButton, styles}) => {
    return <TouchableOpacity 
    style={styles}>
        <Text>{textButton}</Text>
    </TouchableOpacity>


}

export default ButtonVolkeno