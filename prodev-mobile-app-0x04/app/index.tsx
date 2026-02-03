import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const backgroundColor = isDark ? "#221010" : "#f8f6f6";
  const cardBackground = isDark ? "#1a1a1a" : "#ffffff";
  const textPrimary = isDark ? "#ffffff" : "#0f172a";
  const textSecondary = isDark ? "#a1a1a1" : "#64748b";

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
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
        <View style={styles.heroContainer}>
          {/* Soft Glow Behind Checkmark */}
          <View
            style={[
              styles.glow,
              {
                backgroundColor: isDark
                  ? "rgba(212,17,17,0.3)"
                  : "rgba(212,17,17,0.25)",
              },
            ]}
          />

          {/* Glassmorphic Checkmark Container */}
          <View
            style={[
              styles.checkmarkContainer,
              {
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(255,255,255,0.3)",
                borderColor: isDark
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(255,255,255,0.4)",
              },
            ]}
          >
            <MaterialIcons name="check-circle" size={64} color="#d41111" />
          </View>
        </View>

        {/* Bottom Half: Content Card */}
        <View style={[styles.contentCard, { backgroundColor: cardBackground }]}>
          {/* Headline */}
          <Text style={[styles.headline, { color: textPrimary }]}>
            Welcome to Ochanja
          </Text>

          {/* Body Text */}
          <Text style={[styles.bodyText, { color: textSecondary }]}>
            Your account has been created successfully. Connect with top vendors
            and discover premium products today.
          </Text>

          {/* User Profile Card */}
          <View
            style={[
              styles.profileCard,
              {
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(100,116,139,0.05)",
                borderColor: isDark
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(226,232,240,1)",
              },
            ]}
          >
            <View style={styles.profileContent}>
              <Image
                source={{
                  uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoEV1ra2_RIKm573fAyHAx7mD1rkiCxqN055QlssHZMF6o2Dab_dzAEoxwqzPAccgBAY7qTpN-4EaygJ54BuRTBoY73xuq_OmBrMmYEGhhPr6-6SGmbAqhph2aC5_BsKJL0ok2y_6hGtEce61g8m0aLSPw8zGQc-xkisEnKLs3KAGtiSFhGuFdJC8nMXJ2xRMWgvAw21nEVY97yc_fkvHiTZIV88jO3ingSkyNUkg2Rv6PdauUbUw05c0pq_dN8pm2p72r06GoWg",
                }}
                style={styles.profileImage}
              />
              <View style={styles.profileInfo}>
                <Text
                  style={[
                    styles.profileLabel,
                    { color: isDark ? "#a1a1a1" : "#94a3b8" },
                  ]}
                >
                  YOU'RE LOGGED IN AS
                </Text>
                <Text style={[styles.profileName, { color: textPrimary }]}>
                  Chinedu Okafor
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="verified-user"
              size={20}
              color={isDark ? "#4b5563" : "#cbd5e1"}
            />
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => router.push("/join")}
              activeOpacity={0.9}
            >
              <LinearGradient
                colors={["#d41111", "#b00d0d"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.buttonGradient}
              >
                <Text style={styles.primaryButtonText}>Start Exploring</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.secondaryButton,
                {
                  backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "#f1e8e8",
                },
              ]}
              onPress={() => router.push("/signin")}
            >
              <Text
                style={[
                  styles.secondaryButtonText,
                  { color: isDark ? "#ffffff" : "#334155" },
                ]}
              >
                Visit My Dashboard
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
