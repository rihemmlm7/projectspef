import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


const themeColors = {
  
};

const Splash = () => {
  return (
    <ImageBackground
      source={require('/projectspef/client/assets/background.png')} 
      style={styles.image} 
      resizeMode="cover" 
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          
          <Image
            source={require('/projectspef/client/assets/logo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%", 
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, 
    height: 200, 
  },
});

export default Splash;
