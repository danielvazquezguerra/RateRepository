import React from 'react'
import { Text, View } from 'react-native'

const RepoItem = ({repo}) => {
  return (
    <View style={{ marginBottom: 15 }}>
        <Text>{repo.fullName}</Text>
        <Text>{repo.id}</Text>
        <Text>{repo.description}</Text>
        <Text>{repo.language}</Text>
        <Text>{repo.starGazesCount}</Text>
        <Text>{repo.reviews}</Text>
        <Text>{repo.forks}</Text>
        <Text>{repo.rating}</Text>
     </View>
  )
}

export default RepoItem