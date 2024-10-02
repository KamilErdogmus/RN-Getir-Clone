import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CategoryFiltering from '../components/CategoryFiltering';
import {ICategory} from '../modals/types';
import TypeFiltering from '../components/TypeFiltering';
import ProductsContainer from '../components/ProductsContainer';

const DetailScreen = props => {
  const [category] = useState<ICategory>(props.route.params.category);
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProductsContainer />
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({main: {color: '#000'}});
