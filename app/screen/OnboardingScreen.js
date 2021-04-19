import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'one',
    title: 'Easy To Find',
    text: 'Connecting blood donors with recipents Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    image: require('../assets/screen1.png'),
  },
  {
    key: 'two',
    title: 'Quick Connects',
    text: 'Connecting blood donors with recipents Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    image: require('../assets/screen2.png'),
  },
  {
    key: 'three',
    title: 'We Save Lives',
    text: 'Connecting blood donors with recipents Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    image: require('../assets/screen3.png'),
  },
]

function OnboardingScreen(props) {
  const [showHomePage, setshowHomePage] = useState(false);

  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            resizeMode: 'contain',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width
          }}>
        </Image>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.text}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.colone}>
        <AppIntroSlider renderItem={renderItem}
          data={slides}
          activeDotStyle={{ backgroundColor: 'blue' }}>
        </AppIntroSlider>
      </View>
      <View style={styles.btnBox}>
        <View style={styles.btnDiv1}>
          <Text style={{ color: '#fff' }}>Continue with Facebook</Text>
        </View>
        <View style={styles.btnDiv2}>
          <Text style={{ color: '#fff' }}>Continue with Phone Number</Text>
        </View>
        <View>
          <Text>We never post anything to facebook</Text>
        </View>
        <View style={styles.content}>
          <Text style={{ textAlign: 'center' }}>By Signing in, you agree with our Terms of Service & Privacy Policy</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  colone: {
    height: '70%',
    justifyContent: 'flex-start',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  subtitle: {
    textAlign: 'center'
  },
  btnBox: {
    height: '25%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10
  },
  btnDiv1: {
    width: 250,
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5
  },
  btnDiv2: {
    width: 250,
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
    color: '#fff',
    borderRadius: 5
  },
});

export default OnboardingScreen;