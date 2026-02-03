import { View, Text, Image, Pressable, StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Profile = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <Text style={styles.profileTitle}>Profile</Text>
          
          <View style={styles.headerCard}>
            <View style={styles.profileHeader}>
              <Image 
                source={require("@/assets/images/user-image.png")} 
                style={styles.profileImage}
              />
              <View>
                <Text style={styles.profileName}>Enya Elvis</Text>
                <Text style={styles.profileHandle}>@enyasystem</Text>
              </View>
            </View>
            <Feather name="edit-3" size={24} color="white" />
          </View>

          <View style={styles.menuCard}>
            <Pressable style={styles.menuItem}>
              <View style={styles.menuContent}>
                <View style={styles.iconCircle}>
                  <FontAwesome6 name="user" size={24} color="#0601B4" />
                </View>
                <View style={styles.menuText}>
                  <Text style={styles.menuItemTitle}>My Account</Text>
                  <Text style={styles.menuItemDesc}>Make Changes to your account</Text>
                </View>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
            </Pressable>

            <Pressable style={styles.menuItem}>
              <View style={styles.menuContent}>
                <View style={styles.iconCircle}>
                  <FontAwesome6 name="user" size={24} color="#0601B4" />
                </View>
                <View style={styles.menuText}>
                  <Text style={styles.menuItemTitle}>Saved Beneficiary</Text>
                  <Text style={styles.menuItemDesc}>Manage your saved accounts</Text>
                </View>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
            </Pressable>

            <Pressable style={styles.menuItem}>
              <View style={styles.menuContent}>
                <View style={styles.iconCircle}>
                  <Ionicons name="lock-closed-outline" size={24} color="#0601B4" />
                </View>
                <View style={styles.menuText}>
                  <Text style={styles.menuItemTitle}>Face ID / Touch ID</Text>
                  <Text style={styles.menuItemDesc}>Make Changes to your account</Text>
                </View>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
            </Pressable>

            <Pressable style={styles.menuItem}>
              <View style={styles.menuContent}>
                <View style={styles.iconCircle}>
                  <Ionicons name="shield-checkmark-outline" size={24} color="#0601B4" />
                </View>
                <View style={styles.menuText}>
                  <Text style={styles.menuItemTitle}>Two-Factor Authentication</Text>
                  <Text style={styles.menuItemDesc}>Further secure your account for safety</Text>
                </View>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
            </Pressable>

            <Pressable style={styles.menuItem}>
              <View style={styles.menuContent}>
                <View style={styles.iconCircle}>
                  <MaterialIcons name="logout" size={24} color="#0601B4" />
                </View>
                <View style={styles.menuText}>
                  <Text style={styles.menuItemTitle}>Log out</Text>
                  <Text style={styles.menuItemDesc}>Further secure your account for safety</Text>
                </View>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
            </Pressable>
          </View>

          <Text style={styles.sectionTitle}>More</Text>

          <View style={styles.moreCard}>
            <Pressable style={styles.menuItem}>
              <View style={styles.menuContent}>
                <View style={styles.iconCircle}>
                  <FontAwesome6 name="user" size={24} color="#0601B4" />
                </View>
                <View style={styles.menuText}>
                  <Text style={styles.menuItemTitle}>My Account</Text>
                  <Text style={styles.menuItemDesc}>Make Changes to your account</Text>
                </View>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
            </Pressable>

            <Pressable style={styles.menuItem}>
              <View style={styles.menuContent}>
                <View style={styles.iconCircle}>
                  <FontAwesome6 name="user" size={24} color="#0601B4" />
                </View>
                <View style={styles.menuText}>
                  <Text style={styles.menuItemTitle}>Saved Beneficiary</Text>
                  <Text style={styles.menuItemDesc}>Manage your saved accounts</Text>
                </View>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  profileTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: '#000',
    marginBottom: 24,
  },
  headerCard: {
    backgroundColor: '#34967C',
    borderRadius: 8,
    paddingHorizontal: 28,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  profileHandle: {
    fontSize: 12,
    fontWeight: '300',
    color: '#fff',
  },
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    gap: 12,
    minHeight: 280,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  menuContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(6, 1, 180, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  menuItemDesc: {
    fontSize: 13,
    fontWeight: '300',
    color: '#999',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  moreCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    gap: 12,
    minHeight: 110,
  },
});

export default Profile;

