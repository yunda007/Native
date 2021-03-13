import React from 'react';
import { View, StyleSheet } from 'react-native';

class App extends Component{
  render(){
    return{
      <View style={styles.container}>
        <View style={styles.containerRed} />
        <View style={styles.containerwhile} />
      </View>

      
    }
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'blue',

  },
  containerRed:{
    flex: 1,
    backgroundColor:'red',
  },
  containerwhile:{
    flex: 1,
    backgroundColor:'black',
  },
});


export default App;