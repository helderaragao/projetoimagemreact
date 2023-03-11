import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import ComponenteImagemHelder from './components/AssetExample';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
    

     <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
<Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    <ComponenteImagemHelder />


 <ComponenteImagemHelder />

 
     <ComponenteImagemHelder />


      <ComponenteImagemHelder />
     
     
    </View>
  );
}

export default DisplayAnImage;