import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
} from 'react-native';

import React, { useState } from 'react';

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth';

import { auth } from '../../firebase';

import { useNavigation } from '@react-navigation/native'; // Оставьте только это для навигации

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [switchMethod, setSwitchMethod] = useState(false);

    const switchMethodHandler = () => {
        setSwitchMethod(!switchMethod);
    };
    const navigation = useNavigation();

    const loginHandler = () => {
        if (switchMethod) {
            if (password !== confirmPassword) {
                alert('Пароли не совпадают!');
                return;
            }
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user.email);
                    navigation.navigate('Menu');
                })
                .catch((error) => {
                    console.log(error.message);
                });
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user.email);
                    navigation.navigate('Menu');
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputConatiner}>
                <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Email"
                    style={styles.input}
                    autoCapitalize="none"
                />
                <TextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Пароль"
                    style={styles.input}
                    secureTextEntry
                />
                {switchMethod && (
                    <TextInput
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)}
                        placeholder="Подтверждение пароля"
                        style={styles.input}
                        secureTextEntry
                    />
                )}
            </View>
            <View style={styles.buttonContainer}>
                <Pressable
                    onPress={loginHandler}
                    style={[styles.button, { backgroundColor: '#a3080f' }]}>
                    <Text style={{ color: '#fff' }}>
                        {switchMethod ? `Зарегистрироваться` : `Войти`}
                    </Text>
                </Pressable>
                <Pressable
                    onPress={switchMethodHandler}
                    style={[styles.button, styles.buttonOutline]}>
                    <Text>
                        {switchMethod
                            ? 'У вас уже есть аккаунт? Войти'
                            : 'У вас нет аккаунта? Зарегистрируйтесь'}
                    </Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputConatiner: {
        width: '90%',
    },
    input: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    buttonContainer: {
        width: '90%',
        marginTop: 30,
    },
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        marginVertical: 5,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#a3080f',
    },
});