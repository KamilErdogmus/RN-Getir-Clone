import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {ICategory} from '../modals/types';
import categoriesGetir from '../constants/categoriesGetir';

const {height} = Dimensions.get('window');

const CategoryBox = ({
  item,
  isActive,
  onPress,
}: {
  item: ICategory;
  isActive: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.view,
        isActive && {
          borderBottomColor: '#ffd00c',
          borderBottomWidth: 2.5,
        },
      ]}>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const CategoryFiltering = ({category}: {category: string}) => {
  const [categories] = useState<ICategory[]>(categoriesGetir);
  const [activeCategory, setActiveCategory] = useState<ICategory>(category);
  return (
    <ScrollView
      style={styles.scroll}
      bounces={false}
      contentContainerStyle={{marginHorizontal: 8}}
      showsHorizontalScrollIndicator={false}
      horizontal>
      {categories.map(item => (
        <CategoryBox
          item={item}
          key={item.id}
          isActive={item.name === activeCategory?.name}
          onPress={() => setActiveCategory(item)}
        />
      ))}
    </ScrollView>
  );
};

export default CategoryFiltering;

const styles = StyleSheet.create({
  scroll: {
    width: '100%',
    backgroundColor: '#7849f7',
    height: height * 0.065,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
    justifyContent: 'center',
  },
  text: {color: '#fff'},
});
