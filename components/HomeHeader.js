import { View, Text } from 'react-native'
import React, {useState} from 'react';
import { TaskCard } from './TaskCard';

// const CollectPoint = (point) => {
//   alert(point);
// }

const HomeHeader = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View>
      <Text>Task List</Text>
      <Text>current Score: {count}</Text>
    </View>
  )
}

export default HomeHeader