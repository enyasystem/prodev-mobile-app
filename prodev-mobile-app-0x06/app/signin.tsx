import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '@/styles/_joinstyle';
import { GOOGLELOGO, FACEBOOKLOGO } from '@/constants';

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    // Handle sign in logic
    console.log('Sign In with:', { email, password });
    // Dev: navigate into the app to the Profile tab after sign in
    router.replace('/profile');
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign In');
  };

  const handleFacebookSignIn = () => {
    console.log('Facebook Sign In');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with back button */}
        <View style={styles.iconsection}>
          <TouchableOpacity onPress={() => router.replace('/')}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Sign In</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Title Section */}
        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Welcome Back</Text>
          <Text style={styles.subText}>Sign in to continue to ProDev</Text>
        </View>

        {/* Form Section */}
        <View style={styles.formGroup}>
          {/* Email Field */}
          <View>
            <Text style={styles.formLabel}>Email Address</Text>
            <TextInput
              style={styles.formControl}
              placeholder="Enter your email"
              placeholderTextColor="#C2C2C2"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          {/* Password Field */}
          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
                style={styles.passwordControl}
                placeholder="Enter your password"
                placeholderTextColor="#C2C2C2"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <MaterialIcons
                  name={showPassword ? 'visibility' : 'visibility-off'}
                  size={24}
                  color="#34967C"
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </View>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleSignIn}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider} />
        </View>

        {/* Social Sign In Buttons */}
        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity
            style={[styles.secondaryButton, { borderColor: '#E9E9E9' }]}
            onPress={handleGoogleSignIn}
          >
            <Image source={GOOGLELOGO} style={{ width: 24, height: 24 }} />
            <Text style={styles.secondaryButtonText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.secondaryButton, { borderColor: '#E9E9E9' }]}
            onPress={handleFacebookSignIn}
          >
            <Image source={FACEBOOKLOGO} style={{ width: 24, height: 24 }} />
            <Text style={styles.secondaryButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Link */}
        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Don&apos;t have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/join')}>
            <Text style={styles.signupSubTitleText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
