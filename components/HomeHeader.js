import { View, Text } from 'react-native'
import React, { useState } from 'react';
import { TaskCard } from './TaskCard';

// const CollectPoint = (point) => {
//   alert(point);
// }

const HomeHeader = () => {
  const [count, setCount] = useState(0);
  // const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#bcb4b4',
      marginBottom: 10,
      shadowColor: '#171717',
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    }}>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 29,
        padding: 10
      }}>Tasklist</Text>
      <View style={{
        borderRadius: 24,
        width: 150,
        height: 30,
        backgroundColor: '#f17e05',
        marginTop: 10,

      }}>
        <Text style={{
          color: "white",
          fontWeight: 'bold',
          padding: 5,
          textAlign: 'center'
        }}> Current Score: {count}</Text>
      </View>

    </View>
  )
}

export default HomeHeader