import React, { Component } from "react";
import { View, Text, StyleSheet, Image, StatusBar, ScrollView, RefreshControl } from "react-native";
import { BoostHeader, BoostCash, BoostQuiz, BoostFeature} from './components';
import { Banner, Section, Divider } from '../../library/components/';
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
              <Banner
                source={require("../../assets/img/banner.jpg")}
                height={120}
              />
            </Section>
            <Divider />
            <Section>
              <Banner
                source={require("../../assets/img/boost-promo.jpg")}
                height={120}
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
              <Banner
                source={require("../../assets/img/fakta-kopi.jpg")}
                height={150}
              />
            </Section>
            <Divider />
            <Section>
              <Text style={styles.sectionContentTitle}>BOOST QUIZ</Text>
            </Section>
            <BoostQuiz />
            <Section>
              <Banner
                source={require("../../assets/img/boost-battle-1.jpg")}
                height={160}
              />
            </Section>
            <Section>
              <Banner
                source={require("../../assets/img/boost-battle-2.jpg")}
                height={160}
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
    fontSize: 18,
    fontFamily: "Raleway-Medium"
  },
  bannerImg: {
    width: "100%",
    height: 150,
    borderRadius: 5
  },
  // section content
  sectionContentTitle: {
    fontSize: 18,
    fontFamily: "Raleway-Bold"
  },
  sectionContentSubtitle: {
    paddingTop: 5,
    fontSize: 16,
    fontFamily: "Raleway-Regular"
  }
});

export default Home;
