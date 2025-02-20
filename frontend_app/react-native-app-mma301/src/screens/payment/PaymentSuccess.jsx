import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import LottieView from 'lottie-react-native';

const PURPLE = '#6A5AE0';

const PaymentSuccessScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.animationWrapper}>
        <LottieView
          source={require('../../../assets/success.json')} 
          autoPlay
          loop={false}
          style={styles.lottieAnimation}
        />
      </View>
      <Text style={styles.thankYouTitle}>Thank you</Text>

      <Text style={styles.thankYouMessage}>
        Your Order will be delivered with invoice #9ds69hs.
        You can track the delivery in the order section.
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PaymentSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animationWrapper: {
    width: 200,
    height: 200,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lottieAnimation: {
    width: 200,
    height: 200
  },
  thankYouTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: PURPLE,
    marginBottom: 10
  },
  thankYouMessage: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    marginBottom: 60,
    paddingHorizontal: 10
  },
  continueButton: {
    backgroundColor: PURPLE,
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 40
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  }
});
