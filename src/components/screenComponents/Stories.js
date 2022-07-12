import { View, Text } from 'react-native'
import React from 'react'

const Stories = () => {
    const storyInfo = [
        {
            id: 1,
            name: "Your Story",
            image: require('../../storage/images/userProfile.png')
        }
    ]
  return (
    <View>
      <Text>Story Screen</Text>
    </View>
  )
}

export default Stories