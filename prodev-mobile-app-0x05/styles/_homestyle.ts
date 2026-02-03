import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  searchGroup: {
    backgroundColor: "#34967C",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    gap: 8,
  },
  searchControlGroup: {
    flex: 1,
    justifyContent: "center",
  },
  searchControl: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  searchFormText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
  },
  searchButton: {
    backgroundColor: "#34967C",
    width: 44,
    height: 44,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 12,
    paddingVertical: 8,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    minWidth: 70,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  paginationContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export { styles }
