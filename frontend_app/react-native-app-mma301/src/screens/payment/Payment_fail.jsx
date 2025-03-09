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

const PaymentFailScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.animationWrapper}>
                <LottieView
                    source={require('../../../assets/failed.json')}
                    autoPlay
                    loop={false}
                    style={styles.lottieAnimation}
                />
            </View>
            <Text style={styles.thankYouTitle}>Sorry, there is somthing wrong</Text>

            <Text style={styles.thankYouMessage}>
                Your Order has been canceled, please try again.
            </Text>

            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Return to Order</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default PaymentFailScreen;

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