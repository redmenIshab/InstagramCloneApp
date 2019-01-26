import { StyleSheet } from "react-native";
import configs from "../../config";

const styles = StyleSheet.create({
  container: { marginTop: 40, marginHorizontal: 0 },
  subContainer1: { alignSelf: "center", paddingLeft: 10 },
  profileInfoContainer: {
    flexDirection: "row",
    height: 140,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  profileInfoNumberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  profileInfoNumberPostContainer: {
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 10
  },
  profileInfoNumberPostNumber: {
    paddingVertical: 5,
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center"
  },
  profileInfoNumberPostText: {
    fontSize: 12,
    color: "#666"
  },
  profileInfoNumberFollowersContainer: {
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 10
  },
  profileInfoNumberFollowersNumber: {
    paddingVertical: 5,
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center"
  },
  profileInfoNumberFollowersText: {
    fontSize: 12,
    color: "#666"
  },
  profileInfoNumberFollowingContainer: {
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 10
  },
  profileInfoNumberFollowingNumber: {
    paddingVertical: 5,
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center"
  },
  profileInfoNumberFollowingText: {
    fontSize: 12,
    color: "#666"
  },
  buttonStyle: {
    width: configs.Button_Width / 1.4,
    height: configs.Button_Height / 1.5,
    backgroundColor: "transparent",
    borderColor: "#666",
    borderWidth: 1
  },
  //Name and status styling
  nameStatusContainer: {
    paddingHorizontal: 10
  },
  nameText: {
    fontWeight: "600",
    fontSize: 12
  },
  subContainer2: {},
  statusText: {
    fontSize: 12,
    color: "#333"
  },
  //myday style

  mydayContainer: {
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  subContainer3: {
    alignItems: "center"
  },
  mydayCircle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#666",
    marginVertical: 10,
    marginHorizontal: 10
  },

  icon: {
    paddingHorizontal: 10
  },
  mydayText: {
    fontSize: 12,
    color: "#222"
  }
});

export default styles;
