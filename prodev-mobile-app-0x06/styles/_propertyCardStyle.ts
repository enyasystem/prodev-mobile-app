import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const isSmallDevice = width < 400;
const isLargeDevice = width > 600;

const cardHeight = isSmallDevice ? 280 : isLargeDevice ? 450 : 380;
const cardPadding = isSmallDevice ? 12 : 16;
const favoriteSize = isSmallDevice ? 40 : 48;
const starSize = isSmallDevice ? 32 : 40;
const titleFontSize = isSmallDevice ? 24 : 30;
const subtitleFontSize = isSmallDevice ? 12 : 15;
const priceFontSize = isSmallDevice ? 15 : 17;
const rateTextSize = isSmallDevice ? 16 : 20;

const styles = StyleSheet.create({
    container: {
      height: cardHeight,
      borderRadius: 10,
      overflow: "hidden",
      marginBottom: cardPadding,
    },
    overlay: {
      height: cardHeight,
      backgroundColor: "rgba(0,0,0,0.3)",
      padding: cardPadding,
      justifyContent: "space-between",
    },
    favoriteGroup: {
      alignItems: "flex-end",
    },
    favoriteOverlay: {
      backgroundColor: "rgba(0,0,0,0.4)",
      width: favoriteSize,
      height: favoriteSize,
      borderRadius: favoriteSize / 2,
      alignItems: "center",
      justifyContent: "center",
    },
    rateGroup: {
      flexDirection: "row",
      alignItems: "center",
      columnGap: 5,
    },
    rateText: {
      fontSize: rateTextSize,
      color: "#fff",
      fontWeight: "500",
      marginLeft: 4,
    },
    priceGroup: {
      backgroundColor: "#F9F9F9",
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
    },
    priceText: {
      fontSize: priceFontSize,
      fontWeight: "500",
    },
    cardTextGroup: {
      flex: isSmallDevice ? 0.7 : 0.6,
      marginRight: isSmallDevice ? 12 : 20,
    },
    cardLargeText: {
      fontSize: titleFontSize,
      fontWeight: "600",
      color: "#fff",
    },
    cardSmallText: {
      fontSize: subtitleFontSize,
      fontWeight: "400",
      color: "#fff",
    },
    cardGroup: {
      flexDirection: "row",
      columnGap: isSmallDevice ? 20 : 40,
      alignItems: "center",
      justifyContent: "space-between",
      flex: 1,
    },
    group: {
      position: "absolute",
      bottom: isSmallDevice ? 20 : 30,
      left: isSmallDevice ? 16 : 30,
      right: isSmallDevice ? 16 : "auto",
    },
  });

  export { styles }
