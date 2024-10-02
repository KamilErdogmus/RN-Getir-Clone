import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductsItem from './ProductsItem';
import productsGetir from '../constants/productsGetir';

const ProductsContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        {productsGetir.slice(0, 2).map(item => (
          <ProductsItem key={item.id} item={item} />
        ))}
      </View>
      <Text style={styles.text}>Çubuk</Text>
      <View style={styles.secondView}>
        {productsGetir.slice(2).map(item => (
          <ProductsItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default ProductsContainer;

const styles = StyleSheet.create({
  container: {},
  firstView: {flexDirection: 'row', backgroundColor: 'white'},
  text: {color: 'gray', fontWeight: 'bold', padding: 14},
  secondView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
    flexWrap: 'wrap',
    paddingVertical: 10,
  },
});
