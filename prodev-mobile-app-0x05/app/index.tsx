import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from "react-native";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { styles as mainStyles } from "@/styles/_mainstyle";

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const backgroundColor = isDark ? "#221010" : "#f8f6f6";
  const cardBackground = isDark ? "#1a1a1a" : "#ffffff";
  const textPrimary = isDark ? "#ffffff" : "#0f172a";
  const textSecondary = isDark ? "#a1a1a1" : "#64748b";

  return (
    <ImageBackground 
      source={BACKGROUNDIMAGE}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView style={[styles.container, { backgroundColor: "rgba(0,0,0,0.3)" }]}>
      {/* Background Gradients */}
      <LinearGradient
        colors={
          isDark
            ? ["rgba(212,17,17,0.1)", "transparent"]
            : ["rgba(212,17,17,0.08)", "transparent"]
        }
        start={{ x: 0, y: 1 }}
        end={{ x: 0.4, y: 0 }}
        style={styles.gradientBottom}
      />
      <LinearGradient
        colors={
          isDark
            ? ["rgba(212,17,17,0.08)", "transparent"]
            : ["rgba(212,17,17,0.06)", "transparent"]
        }
        start={{ x: 1, y: 1 }}
        end={{ x: 0.6, y: 0 }}
        style={styles.gradientBottomRight}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Half: Hero Visual */}
        <View style={mainStyles.logoContainer}>
          <Image 
            source={HEROLOGO}
            style={{ width: 120, height: 120, resizeMode: 'contain' }}
          />
        </View>

        {/* Title Section */}
        <View style={mainStyles.titleContainer}>
          <Text style={mainStyles.titleText}>ProDev</Text>
          <View style={mainStyles.titleSubTextContainer}>
            <Text style={mainStyles.titleSubText}>
              Learn to Code. Build Your Future.
            </Text>
          </View>
        </View>

        {/* Bottom Half: Action Buttons */}
        <View style={mainStyles.buttonGroup}>
          <TouchableOpacity
            style={mainStyles.buttonPrimary}
            onPress={() => router.push("/join")}
          >
            <Text style={mainStyles.buttonPrimaryText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={mainStyles.buttonSecondary}
            onPress={() => router.push("/signin")}
          >
            <Text style={mainStyles.buttonSecondaryText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  gradientBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "40%",
    pointerEvents: "none",
  },
  gradientBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "100%",
    height: "30%",
    pointerEvents: "none",
  },
  heroContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 30,
    position: "relative",
  },
  glow: {
    position: "absolute",
    width: 128,
    height: 128,
    borderRadius: 64,
    opacity: 0.6,
  },
  checkmarkContainer: {
    width: 128,
    height: 128,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    shadowColor: "#d41111",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 32,
    elevation: 10,
  },
  contentCard: {
    marginHorizontal: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingHorizontal: 24,
    paddingVertical: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 5,
  },
  headline: {
    fontSize: 28,
    fontWeight: "800",
    marginTop: 8,
    marginBottom: 12,
    textAlign: "center",
    letterSpacing: -0.5,
  },
  bodyText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 32,
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 8,
  },
  profileCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 9999,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 24,
    alignSelf: "center",
    maxWidth: 340,
    width: "100%",
  },
  profileContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  profileInfo: {
    justifyContent: "center",
  },
  profileLabel: {
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  profileName: {
    fontSize: 14,
    fontWeight: "700",
  },
  buttonContainer: {
    gap: 12,
  },
  primaryButton: {
    height: 56,
    borderRadius: 9999,
    overflow: "hidden",
    shadowColor: "#d41111",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
  },
  buttonGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
    letterSpacing: 0.3,
  },
  secondaryButton: {
    height: 56,
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
});
