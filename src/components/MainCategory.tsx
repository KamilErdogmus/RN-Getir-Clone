import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CategoryItem from './CategoryItems';
import categoriesGetir from '../constants/categoriesGetir';
import {ICategory} from '../modals/types';

const MainCategory = () => {
  const [category] = useState<ICategory[]>(categoriesGetir);
  return (
    <View>
      <View style={styles.section}>
        {category.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </View>
      <View></View>
    </View>
  );
};

export default MainCategory;

const styles = StyleSheet.create({
  section: {flexDirection: 'row', flex: 1, flexWrap: 'wrap'},
});
