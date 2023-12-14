import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import TextStyled from './TextStyled';


const styles = StyleSheet.create({

  container: {

    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  textStrong: {
    fontWeight: 'bold',
    color: 'blue'
  }

})



const RepoItem = ({repo}) => {

  return (
    <View style={styles.container}>
        <TextStyled bold children={repo.fullName} />
        <TextStyled gray children={repo.description}/>
        <TextStyled gray children={repo.language}/>
        <TextStyled gray children={repo.starGazesCount}/>
        <TextStyled gray children={repo.reviews}/>
        <TextStyled gray children={repo.forks}/>
        <TextStyled gray children={repo.rating}/>
     </View>
  )

  
}



export default RepoItem