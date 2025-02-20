import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Google, Facebook, Apple } from "../../../assets/login_icon/index";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Login = ({navigation}) => {

    const [seePassword, setSeePassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSignIn = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1000),
        navigation.navigate('home')
    }

    const handleSeePassword = () => {
        setSeePassword(!seePassword)
    }

    const handleForgotPassword = () => {
        navigation.navigate('forgot_password')
    }

    const handleGotoRegister = () => {
        navigation.navigate('register')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Welcome to SO.</Text>
            {/* Goole, facebook,Apple Login  */}
            <View>
                <TouchableOpacity style={styles.AuthButton}>
                    <Google width={30} height={30} />
                    <Text style={styles.textAuth}>Login with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.AuthButton}>
                    <Apple width={30} height={30} />
                    <Text style={styles.textAuth}>Login with Apple</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.AuthButton}>
                    <Facebook width={30} height={30} />
                    <Text style={styles.textAuth}>Login with Facebook</Text>
                </TouchableOpacity>
            </View>
            {/* email text */}
            <Text style={styles.emailText}>or by email</Text>
            {/* Email Address Input */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    placeholderTextColor="#000"
                />
            </View>
            {/*Password Input  */}
            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#000"
                    secureTextEntry={!seePassword}
                />
                <MaterialIcons onPress={() => handleSeePassword()} name={seePassword ? "eye" : "eye-off"} size={22} color="gray" style={styles.icon} />
            </View>
            {/* forgot password */}
            <View style={styles.forgotPasswordContainer}>
                <Text onPress={() => handleForgotPassword()} >Forgot password?</Text>
            </View>
            {/* button */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.loginButton]}>
                    <Text style={styles.buttonText} onPress={() => handleSignIn()}>{loading ? <ActivityIndicator/> : `Sign In`}</Text>

                </TouchableOpacity>
            </View>
            {/* Signup Text */}
            <View style={styles.signupContainer}>
                <Text style={styles.signupText1}>Don't have an account? <Text onPress={() => handleGotoRegister()} style={styles.signupText}> Create an account</Text></Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#F8FAFC',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 30,
        color: '#000',
    },
    AuthButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 15,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    textAuth: {
        fontSize: 18,
        marginLeft: 10,
        fontWeight: '500',
        color: '#000',
    },
    emailText: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 20,
        color: '#666',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#ccc',
        paddingHorizontal: 15,
        height: 55,
        marginVertical: 8,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 18,
        color: 'black',
    },
    forgotPasswordContainer: {
        alignItems: 'flex-end',
        marginVertical: 10,
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0098FF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    signupContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    signupText: {
        color: '#0098FF',
        fontSize: 16,
        fontWeight: '500',
        textDecorationLine: 'underline'
    },
    signupText1: {
        fontSize: 16,
    },
    icon: {
        marginLeft: 10
    },
    iconArrow: {
        color: "white",
    }
});
