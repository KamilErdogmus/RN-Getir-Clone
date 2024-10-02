import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import productsGetir from '../constants/productsGetir';
import ProductsItem from '../components/ProductsItem';
import {useSelector} from 'react-redux';
import {IProduct} from '../modals/types';
import CartItem from './../components/CartItem';

const {height} = Dimensions.get('window');

const CartScreen = () => {
  const cartItems = useSelector(
    (state: {cartItems: {product: IProduct; quantity: number}[]}) =>
      state.cartItems,
  );

  const [totalprice, setTotalPrice] = useState<number>(0);

  const getProductsPrice = () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + (item.product.fiyatIndirimli as number) * item.quantity;
    }, 0);

    setTotalPrice(cartItems.length ? total : 0);
  };

  useEffect(() => {
    getProductsPrice();
  }, [cartItems]);

  return (
    <View style={styles.main}>
      <FlatList
        data={cartItems}
        style={{backgroundColor: '#F5F5F5'}}
        initialNumToRender={5}
        windowSize={10}
        removeClippedSubviews={true}
        renderItem={({item}) => (
          <CartItem product={item.product} quantity={item.quantity} />
        )}
        ListFooterComponent={
          <>
            <Text style={styles.headerText}>Önerilen Ürünler</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.horizontalScroll}
              bounces={true}>
              {productsGetir.map(item => (
                <ProductsItem key={item.id} item={item} />
              ))}
            </ScrollView>
          </>
        }
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Devam</Text>
        </TouchableOpacity>
        <View style={styles.money}>
          <Text style={styles.price}>&#8378;{totalprice.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  main: {flex: 1},
  headerText: {
    padding: 15,
    fontWeight: 'bold',
    color: '#5d3ebd',
  },
  horizontalScroll: {
    backgroundColor: 'white',
    height: '100%',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 0.12,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: '4%',
  },
  btn: {
    flex: 3,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: '#5D3EBD',
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
  },
  text: {color: 'white', fontWeight: 'bold', fontSize: 16},
  money: {
    flex: 1,
    borderTopRightRadius: 10,
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderBottomRightRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    height: height * 0.06,
    alignItems: 'center',
    marginTop: -10,
  },
  price: {color: '#5D3EBD', fontWeight: 'bold', fontSize: 15},
});
