import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function JoinScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleJoin = () => {
    console.log('Join with:', { fullName, email, password, confirmPassword });
  };

  const handleGoogleSignUp = () => {
    console.log('Google Sign Up');
  };

  const handleFacebookSignUp = () => {
    console.log('Facebook Sign Up');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}
      >
        {/* Header with back button */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, marginBottom: 24 }}>
          <TouchableOpacity onPress={() => router.replace('/')}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Title Section */}
        <View style={{ marginBottom: 32 }}>
          <Text style={{ fontSize: 32, fontWeight: '700', color: '#000', marginBottom: 8 }}>
            Create Account
          </Text>
          <Text style={{ fontSize: 14, fontWeight: '400', color: '#7E7B7B' }}>
            Start your ProDev learning journey
          </Text>
        </View>

        {/* Form Section */}
        <View style={{ gap: 24, marginBottom: 32 }}>
          {/* Full Name Field */}
          <View>
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#7B7B7B', marginBottom: 8 }}>
              Full Name
            </Text>
            <TextInput
              style={{
                borderWidth: 2,
                height: 50,
                borderRadius: 10,
                borderColor: '#E9E9E9',
                paddingHorizontal: 12,
                fontSize: 16,
                color: '#000',
              }}
              placeholder="Enter your full name"
              placeholderTextColor="#C2C2C2"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          {/* Email Field */}
          <View>
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#7B7B7B', marginBottom: 8 }}>
              Email Address
            </Text>
            <TextInput
              style={{
                borderWidth: 2,
                height: 50,
                borderRadius: 10,
                borderColor: '#E9E9E9',
                paddingHorizontal: 12,
                fontSize: 16,
                color: '#000',
              }}
              placeholder="Enter your email"
              placeholderTextColor="#C2C2C2"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          {/* Password Field */}
          <View>
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#7B7B7B', marginBottom: 8 }}>
              Password
            </Text>
            <View
              style={{
                borderWidth: 2,
                height: 50,
                borderRadius: 10,
                borderColor: '#E9E9E9',
                paddingHorizontal: 12,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <TextInput
                style={{ flex: 1, fontSize: 16, color: '#000' }}
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
          </View>

          {/* Confirm Password Field */}
          <View>
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#7B7B7B', marginBottom: 8 }}>
              Confirm Password
            </Text>
            <View
              style={{
                borderWidth: 2,
                height: 50,
                borderRadius: 10,
                borderColor: '#E9E9E9',
                paddingHorizontal: 12,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <TextInput
                style={{ flex: 1, fontSize: 16, color: '#000' }}
                placeholder="Confirm your password"
                placeholderTextColor="#C2C2C2"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                <MaterialIcons
                  name={showConfirmPassword ? 'visibility' : 'visibility-off'}
                  size={24}
                  color="#34967C"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Join Button */}
        <TouchableOpacity
          style={{
            backgroundColor: '#34967C',
            height: 53,
            borderRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 32,
          }}
          onPress={handleJoin}
        >
          <Text style={{ color: 'white', fontSize: 17, fontWeight: '500' }}>
            Join Now
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 32 }}>
          <View style={{ borderWidth: 1, flex: 1, borderColor: '#e6e6e6' }} />
          <Text style={{ fontSize: 14, fontWeight: '500', color: '#C2C2C2', marginHorizontal: 12 }}>
            OR
          </Text>
          <View style={{ borderWidth: 1, flex: 1, borderColor: '#e6e6e6' }} />
        </View>

        {/* Social Sign Up Buttons */}
        <View style={{ gap: 12, marginBottom: 32 }}>
          <TouchableOpacity
            style={{
              height: 53,
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#E9E9E9',
              gap: 10,
            }}
            onPress={handleGoogleSignUp}
          >
            <FontAwesome name="google" size={20} color="#EA4335" />
            <Text style={{ fontSize: 16, fontWeight: '400', color: '#000' }}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 53,
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#E9E9E9',
              gap: 10,
            }}
            onPress={handleFacebookSignUp}
          >
            <FontAwesome name="facebook" size={20} color="#1877F2" />
            <Text style={{ fontSize: 16, fontWeight: '400', color: '#000' }}>Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Sign In Link */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 4 }}>
          <Text style={{ fontSize: 14, fontWeight: '400', color: '#7B7B7B' }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push('/signin')}>
            <Text style={{ fontSize: 14, fontWeight: '600', color: '#FFA800' }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
