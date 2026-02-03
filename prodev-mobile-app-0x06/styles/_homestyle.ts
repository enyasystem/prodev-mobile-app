import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const isSmallDevice = width < 400;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  searchGroup: {
    backgroundColor: "#34967C",
    paddingHorizontal: isSmallDevice ? 12 : 16,
    paddingVertical: isSmallDevice ? 10 : 12,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: isSmallDevice ? 44 : 50,
    gap: 8,
  },
  searchControlGroup: {
    flex: 1,
    justifyContent: "center",
  },
  searchControl: {
    flex: 1,
    fontSize: isSmallDevice ? 12 : 14,
    color: "#333",
  },
  searchFormText: {
    fontSize: isSmallDevice ? 12 : 14,
    fontWeight: "500",
    color: "#666",
  },
  searchButton: {
    backgroundColor: "#34967C",
    width: isSmallDevice ? 40 : 44,
    height: isSmallDevice ? 40 : 44,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: isSmallDevice ? 12 : 16,
    gap: isSmallDevice ? 10 : 12,
    paddingVertical: 8,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    minWidth: isSmallDevice ? 60 : 70,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: isSmallDevice ? 12 : 16,
    paddingVertical: isSmallDevice ? 8 : 12,
  },
  paginationContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingVertical: isSmallDevice ? 10 : 12,
    paddingHorizontal: isSmallDevice ? 24 : 32,
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: isSmallDevice ? 14 : 16,
    fontWeight: "600",
  },
});

export { styles }
