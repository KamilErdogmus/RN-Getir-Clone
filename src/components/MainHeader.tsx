import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {ArrowRight2} from 'iconsax-react-native';

const {height} = Dimensions.get('window');

const MainHeader = () => {
  return (
    <SafeAreaView style={styles.headerMain}>
      <View style={styles.firstHeader}>
        <Image
          source={{uri: 'https://cdn.getir.com/misc/emoji/house.png'}}
          style={styles.logo}
        />
        <View style={styles.headerFirstView}>
          <Text style={styles.place}>Ev</Text>
          <Text style={styles.address}>
            Dedepaşa Blv. Yenişehir Mahallesi...
          </Text>
          <ArrowRight2 size="22" color="#5d3ebd" variant="Outline" />
        </View>
      </View>
      <View style={styles.secondHeader}>
        <Text style={styles.TVS}>TVS</Text>
        <Text style={styles.last}>
          13
          <Text style={styles.min}>dk</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MainHeader;

export const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.064,
    flexDirection: 'row',
    backgroundColor: '#F7D102',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  firstHeader: {
    height: height * 0.064,
    width: '81%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  logo: {width: 30, height: 30},
  headerFirstView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 8,
    paddingLeft: 8,
    borderLeftColor: '#F3F2FD',
    borderLeftWidth: 2,
    height: height * 0.035,
  },
  place: {fontWeight: '600', fontSize: 16, color: '#000'},
  address: {
    fontWeight: '500',
    fontSize: 11,
    marginLeft: 2,
    marginRight: 1,
    color: '#000',
  },

  secondHeader: {
    width: '20%',
    paddingLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.064,
  },
  TVS: {fontSize: 12, fontWeight: 'bold', color: '#5d3ebd'},
  last: {fontSize: 20, fontWeight: 'bold', color: '#5d3ebd'},
  min: {fontSize: 15, color: '#5d3ebd'},
});
