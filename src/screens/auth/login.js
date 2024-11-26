import React from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, ROUTES} from '../../constants';
import {useNavigation} from '@react-navigation/native';

import styles from '../../assets/lib/css/styles';
const Login = props => {
  // const {navigation} = props;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.main}>
        <View style={styles.container}>
            <View style={styles.wFull}>
                <View style={styles.containerLogo}>
                    <Image style={{width:230, height: 80}} source={require('../../assets/lib/images/new-logo-pmli.png')}/>
                </View>
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Password" />

                <View style={styles.loginBtnWrapper}>
                    <LinearGradient
                        colors={[COLORS.gradientForm, COLORS.primary]}
                        style={styles.linearGradient}
                        start={{y: 0.0, x: 0.0}}
                        end={{y: 1.0, x: 0.0}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(ROUTES.HOME)}
                            activeOpacity={0.7}
                            style={styles.loginBtn}>
                            <Text style={styles.loginText}>Log In</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate(ROUTES.FORGOT_PASSWORD, {
                        userId: 'X0001',
                        })
                    }
                    style={styles.forgotPassBtn}>
                    <Text style={styles.forgotPassText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}> Don't have an account? </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate(ROUTES.REGISTER)}>
                    <Text style={styles.signupBtn}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  );
};

export default Login;
