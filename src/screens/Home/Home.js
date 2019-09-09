import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Icon } from "react-native-elements";
import BoostHeader from "./components/BoostHeader";
import BoostCash from "./components/BoostCash";
import BoostQuiz from "./components/BoostQuiz";
import Bg from "../../assets/img/bg2.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => this.setState({ refreshing: false }), 1000);
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <Image source={Bg} style={styles.imageBackground} />
          <StatusBar backgroundColor="#C6251C" barStyle="light-content" />
          <View style={styles.content}>
            {/*boostheader*/}
            <BoostHeader text="Hello, Booster" />
            {/*cardcash*/}
            <BoostCash title="BoostCash" subtitle="CheckNow" />
            {/*boostmore card*/}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>BoostMore</Text>
            </View>
            <View style={styles.cardFeature}>
              <View style={styles.featureContentWrapper}>
                <View style={styles.featureContent}>
                  <Image
                    style={styles.featureContentImg}
                    source={require("../../assets/img/reward.jpg")}
                  />
                  <Text style={styles.featureContentLabel}>Get Lucky</Text>
                </View>
                <View style={styles.featureContent}>
                  <Image
                    style={styles.featureContentImg}
                    source={require("../../assets/img/invite.jpg")}
                  />
                  <Text style={styles.featureContentLabel}>Invite</Text>
                </View>
                <View style={styles.featureContent}>
                  <Image
                    style={styles.featureContentImg}
                    source={require("../../assets/img/medicall.jpg")}
                  />
                  <Text style={styles.featureContentLabel}>MediCall</Text>
                </View>
                <View style={styles.featureContent}>
                  <Image
                    style={styles.featureContentImg}
                    source={require("../../assets/img/boostquest.jpg")}
                  />
                  <Text style={styles.featureContentLabel}>BoostQuest</Text>
                </View>
              </View>
            </View>

            {/*Divider*/}
            <View style={styles.divider} />

            {/*banner*/}
            <View style={styles.sectionContainer}>
              <Image
                source={require("../../assets/img/banner.jpg")}
                style={styles.bannerImg}
              />
            </View>

            <View style={styles.divider} />

            {/*banner2*/}
            <View style={styles.sectionContainer}>
              <Image
                source={require("../../assets/img/boost-promo.jpg")}
                style={{ height: 120, width: "100%" }}
                resizeMode={"stretch"}
              />
            </View>

            <View style={styles.divider} />

            {/*banner2*/}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionContentTitle}>BOOST TIPS & INFO</Text>
              <Text style={styles.sectionContentSubtitle}>
                Banyak Tips dan info menarik disini!
              </Text>
            </View>

            {/*banner3*/}
            <View style={styles.sectionContainer}>
              <Image
                source={require("../../assets/img/fakta-kopi.jpg")}
                style={styles.bannerImg}
              />
            </View>

            <View style={styles.divider} />

            {/*Boost Quiz Section*/}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionContentTitle}>BOOST QUIZ</Text>
            </View>
            <BoostQuiz />
            {/*banner4*/}
            <View style={styles.sectionContainer}>
              <Image
                source={require("../../assets/img/boost-battle-1.jpg")}
                style={{ height: 160, width: "100%" }}
                resizeMode={"stretch"}
              />
            </View>
            {/*banner5*/}
            <View style={styles.sectionContainer}>
              <Image
                source={require("../../assets/img/boost-battle-2.jpg")}
                style={{ height: 160, width: "100%" }}
                resizeMode={"stretch"}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
  },
  imageBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  content: {
    flex: 1,
    marginBottom: 10
  },
  // SECTION TITLE
  sectionContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  sectionTitle: {
    fontSize: 18
  },
  // Features
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
    fontSize: 12
  },
  // divider
  divider: {
    height: 1,
    backgroundColor: "#E1DFE1",
    marginTop: 20,
    marginHorizontal: 20
  },
  bannerImg: {
    width: "100%",
    height: 150
    // resizeMode: 'cover'
  },
  bannerImgScroll: {
    borderRadius: 5,
    marginTop: 20,
    width: "90%",
    height: 150
  },
  // section content
  sectionContentTitle: {
    fontSize: 18,
    fontWeight: "700"
  },
  sectionContentSubtitle: {
    fontSize: 16
  },
  // Boost Quiz
  boostQuizContainer: {
    marginTop: 20
  },
  contentContainer: {
    paddingLeft: 20
  },
  boostQuizCard: {
    borderRadius: 5,
    marginRight: 10,
    borderColor: "#E1DFE1",
    borderWidth: 1
  },
  boostQuizCardImg: {
    height: 150,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  },
  boostQuizCardInfo: {
    padding: 10
  },
  boostQuizCardInfoTitle: {
    fontWeight: "bold",
    fontSize: 18
  }
});

export default Home;
