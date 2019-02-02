import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == "ios" ? 40 : 0
  },
  flatlist: {
    marginTop: 10
  },
  itemContainer: {
    marginTop: 10,
    flexDirection: "row",
    height: 60
  },
  message: {
    paddingHorizontal: 10,
    alignSelf: "center"
  },
  title: {
    height: 40,
    marginVertical: 5,
    shadowOffset: { height: 0, width: 1 },
    shadowColor: "#666",
    shadowOpacity: 0.5,
    elevation: 1,
    paddingVertical: 10,
    width: "100%",
    backgroundColor: "#fff"
  },
  you: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#222",
    alignSelf: "center"
  }
});

export default styles;
