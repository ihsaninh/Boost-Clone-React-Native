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
import BoostFeature from "./components/BoostFeature";
import Section from '../../library/components/Section';
import Divider from '../../library/components/Divider';
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
            <BoostHeader text="Hello, Booster" />
            <BoostCash title="BoostCash" subtitle="CheckNow" />
            <Section>
              <Text style={styles.sectionTitle}>BoostMore</Text>
            </Section>
            <BoostFeature />
            <Divider />
            <Section>
              <Image
                source={require("../../assets/img/banner.jpg")}
                style={styles.bannerImg}
              />
            </Section>
            <Divider />
            <Section>
              <Image
                source={require("../../assets/img/boost-promo.jpg")}
                style={{ height: 120, width: "100%" }}
                resizeMode={"stretch"}
              />
            </Section>
            <Divider />
            <Section>
              <Text style={styles.sectionContentTitle}>BOOST TIPS & INFO</Text>
              <Text style={styles.sectionContentSubtitle}>
                Banyak Tips dan info menarik disini!
              </Text>
            </Section>
            <Section>
              <Image
                source={require("../../assets/img/fakta-kopi.jpg")}
                style={styles.bannerImg}
              />
            </Section>
            <Divider />
            <Section>
              <Text style={styles.sectionContentTitle}>BOOST QUIZ</Text>
            </Section>
            <BoostQuiz />
            {/*banner4*/}
            <Section>
              <Image
                source={require("../../assets/img/boost-battle-1.jpg")}
                style={{ height: 160, width: "100%" }}
                resizeMode={"stretch"}
              />
            </Section>
            {/*banner5*/}
            <Section>
              <Image
                source={require("../../assets/img/boost-battle-2.jpg")}
                style={{ height: 160, width: "100%" }}
                resizeMode={"stretch"}
              />
            </Section>
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
  sectionTitle: {
    fontSize: 18
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
  }
});

export default Home;
