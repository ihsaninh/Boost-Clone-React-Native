import React from "react";
import { View, Image, FlatList, StyleSheet, Text } from "react-native";

const BoostFeature = props => {
  const featureLists = [
    {
      image: require("../../../assets/img/reward.jpg"),
      title: "Get Lucky"
    },
    {
      image: require("../../../assets/img/invite.jpg"),
      title: "Invite"
    },
    {
      image: require("../../../assets/img/medicall.jpg"),
      title: "MediCall"
    },
    {
      image: require("../../../assets/img/boostquest.jpg"),
      title: "BoostQuest"
    }
  ];
  return (
    <View style={styles.cardFeature}>
      <View style={styles.featureContentWrapper}>
        {featureLists.map((item, i) => (
          <View style={styles.featureContent} key={i}>
            <Image style={styles.featureContentImg} source={item.image} />
            <Text style={styles.featureContentLabel}>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardFeatures: {
    marginHorizontal: 20,
    height: 80,
    width: "100%",
    elevation: 1,
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 5
  },
  featureContentWrapper: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 15
  },
  featureContent: {
    flex: 1,
    alignItems: "center"
  },
  featureContentImg: {
    height: 40,
    width: 40
  },
  featureContentLabel: {
    color: "#797779",
    fontSize: 12,
    fontFamily: "Raleway-Regular"
  }
});

export default BoostFeature;
