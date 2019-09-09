import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	Dimensions,
	FlatList
} from 'react-native';

const BoostQuiz = (props) => {
	let dimensions = Dimensions.get("window");
  let imageWidth = dimensions.width * 0.8;
	const lists = [
		{
			image: require("../../../assets/img/family.jpg"),
			title: 'Family Time bagi Millenials',
			subtitle: 'Kamu termasuk tipe yang mana?'
		},
		{
			image: require("../../../assets/img/kopi.jpg"),
			title: 'Cari tau mana kopi favoritmu!',
			subtitle: 'Buktikan kalau kamu pencinta kopi!',
		},
		{
			image: require("../../../assets/img/quiz.jpg"),
			title: 'Sepolos apa kamu saat SMA?',
			subtitle: 'Jangan ditutup-tutupin yang!',
		}
	]
		_listComponent = ({item}) => {
			return (
    		<View style={[styles.boostQuizCard, { width: imageWidth }]}>
		      <Image
		        source={item.image}
		        style={[styles.boostQuizCardImg, { width: imageWidth }]}
		      />
		      <View style={styles.boostQuizCardInfo}>
		        <Text style={styles.boostQuizCardInfoTitle}>
		          {item.title}
		        </Text>
		        <Text>{item.subtitle}</Text>
		      </View>
		    </View>
    )
	}
  return (
    <View style={styles.boostQuizContainer}>
      <FlatList
        data={lists}
        horizontal
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(list, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={_listComponent}
    	/>
    </View>
  );
}

const styles = StyleSheet.create({
	boostQuizContainer: {
    marginTop: 20,
  },
  contentContainer: {
    paddingLeft: 20
  },
  boostQuizCard: {
    borderRadius: 5,
    marginRight: 10,
    borderColor: "#E1DFE1",
    borderWidth: 1,
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

export default BoostQuiz;