import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

// Component to display Title and sub link
export const SubView = ({ titleName, subTitle }) => {
    return (
        <View>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 15,
            }}>{titleName}</Text>
            <Text style={{
                marginTop: 5,
                color: '#8A8A8A',
                textDecorationLine: 'underline'
            }}>{subTitle}</Text>

        </View>
    )
}

// Component for collect point button
export const ButtonIcon = ({ points, pointCollected, handlePress }) => {
    let label = pointCollected ? 'COMPLETE' : '+ ' + points + ' Pt';
    return (
        <TouchableOpacity style={{
            padding: 6,
            marginLeft: 10,
        }}
            onPress={handlePress}
            disabled={pointCollected}
            >
            <Text style={{
                color: "white",
                fontWeight: 'bold'
            }}>{label}</Text>
        </TouchableOpacity>
    )
}