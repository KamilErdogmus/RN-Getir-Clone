import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {ICategory} from '../modals/types';
import {Screens} from '../constants/Screens';

const {width} = Dimensions.get('window');

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const CategoryItem = ({item}: {item: ICategory}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() => navigation.navigate(Screens.Details, {category: item})}>
      <Image source={{uri: item.src}} style={styles.img} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  btnContainer: {
    width: width * 0.25,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
    height: width * 0.24,
  },
  img: {width: width * 0.18, height: width * 0.18, borderRadius: 8},
  text: {fontSize: 12, color: '#616161', fontWeight: '500'},
});
