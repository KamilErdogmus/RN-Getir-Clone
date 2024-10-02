import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IProduct} from '../modals/types';
import ImageCarousel from '../components/ImageCarousel';
import Detailbox from '../components/Detailbox';
import DetailProperty from '../components/DetailProperty';
import CardButton from '../components/CardButton';
import {ScrollView} from 'react-native-gesture-handler';

const ProductsDetailScreen = props => {
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    setProduct(props.route.params.product);
  }, [props]);

  if (!product) return <ActivityIndicator color={'#5de3bd'} />;

  return (
    <View style={styles.main}>
      <ScrollView>
        <ImageCarousel images={product?.images} />
        <Detailbox
          price={product.fiyatIndirimli as number}
          name={product.name}
          amount={product.miktar}
        />
        <Text style={styles.text}>Detaylar</Text>
        <DetailProperty />
      </ScrollView>
      <CardButton item={product} />
    </View>
  );
};

export default ProductsDetailScreen;

const styles = StyleSheet.create({
  main: {flex: 1},
  text: {
    color: '#808b99',
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
});
