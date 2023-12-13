import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { repositoryData } from '../constants/constants';
import RepoItem from './RepoItem';

const RepositoryList = () => {
  return (
    <View
      style={{
        borderColor: "black",
        borderWidth: 1,
        margin: 20,
        padding: 20,
      }}
    >
      <FlatList
        data={repositoryData}
        renderItem={({ item: repo }) => (
          <RepoItem repo={repo}/>
        )}
      />
    </View>
  );
}

export default RepositoryList