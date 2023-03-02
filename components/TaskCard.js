import { View, Text, Image } from 'react-native'
import React, { useState } from 'react';
import { SubView, ButtonIcon } from './SubView';

export const TaskCard = ({ data }) => {

  const [isPointCollected, setIsPointCollected] = useState(false);

  const updateState = () => {
    setIsPointCollected(!isPointCollected);
  }

  return (
    <View style={{
      backgroundColor: 'white',
      borderRadius: 14,
      marginBottom: 10,
      margin: 8,
    }}>
      <View style={{
        flex: 1,
        flexDirection: "row",
        width: "100%",
        height: 85,
        padding: 15,
        opacity: isPointCollected ? 0.5 : 1
      }}>
        <View>
          <Image source={{ uri: data.image }}
            resizeMode='center'
            style={{
              width: 55,
              height: 55,
              borderRadius: 10
            }}
          />
        </View>
        <View style={{ marginLeft: 20 }}>
          <SubView titleName={data.name} subTitle={data.link} />
        </View>
        <View style={{
          borderRadius: 24,
          width: isPointCollected ? 100 : 75,
          height: 30,
          backgroundColor: isPointCollected ? '#bcbcbc' : '#f17e05',
          marginLeft: isPointCollected ? 30 : 50,
          marginTop: 10,

        }}>
          {/*Renders point collect button */}
          <ButtonIcon points={data.points} pointCollected={isPointCollected} handlePress={() => updateState()} />
        </View>
      </View>
    </View>
  )
}

