import React from 'react';
import {
	View,
	Image,
	Text,
	StyleSheet
} from 'react-native';
import peopleimg from '../../../assets/img/people.jpg';

const BoostCash = (props) => {
	const { title, subtitle } = props;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <View style={styles.cardContentText}>
          <Text style={styles.cardContentTitle}>{title}</Text>
          <Text style={styles.cardContentSubtitle}>{subtitle}</Text>
        </View>
        <View style={styles.cardContentBanner}>
          <Image
            source={peopleimg}
            style={styles.cardContentBannerImg}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
	cardContainer: {
    height: 150,
    width: "auto",
    elevation: 1,
    backgroundColor: "#fff",
    marginTop: 35,
    borderRadius: 5,
    marginHorizontal: 20
  },
  cardContent: {
    flexDirection: "row",
    position: "relative"
  },
  cardContentText: {
    flexDirection: "column",
    marginTop: 50,
    marginLeft: 20
  },
  cardContentTitle: {
    color: "#757375",
    fontSize: 18,
    fontFamily: "Raleway"
  },
  cardContentSubtitle: {
    color: "#0A8689",
    fontSize: 18,
    fontFamily: "Raleway"
  },
  cardContentBanner: {
    position: "absolute",
    right: 0
  },
  cardContentBannerImg: {
    width: 150,
    height: 150
  },
});

export default BoostCash;