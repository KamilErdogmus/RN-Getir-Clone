import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {Screens} from '../constants/Screens';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DetailScreen from '../screens/DetailScreen';
import ProductsDetailScreen from '../screens/ProductsDetailScreen';
import {
  getFocusedRouteNameFromRoute,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import {Heart, TagCross, Trash} from 'iconsax-react-native';
import CartScreen from '../screens/CartScreen';
import {IProduct} from '../modals/types';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {clearCart} from './../redux/actions/actions';

const {width} = Dimensions.get('screen');

type RootStackParamList = {
  [Screens.Home]: undefined;
  [Screens.Details]: undefined;
  [Screens.ProductDetail]: {product: IProduct};
  [Screens.Cart]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

type MyStackProps = {
  navigation: NavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
};

const MyStack = ({navigation, route}: MyStackProps) => {
  const cartItems = useSelector((state: RootState) => state.cartItems);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const tabHiddenRoutes = ['ProductDetails', 'Cart'];

  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    navigation.setOptions({
      tabBarStyle: {
        display: tabHiddenRoutes.includes(routeName as string)
          ? 'none'
          : 'flex',
      },
    });

    const total = cartItems.reduce(
      // @ts-ignore
      (acc, item) => acc + item.product.fiyatIndirimli,
      0,
    );
    setTotalPrice(total);
  }, [navigation, route, cartItems]);

  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{
          headerStyle: {backgroundColor: '#5c3ebc'},
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Image
              source={require('../../assets/getirlogo.png')}
              style={{width: 70, height: 30}}
            />
          ),
        }}
      />
      <Stack.Screen
        name={Screens.Details}
        component={DetailScreen}
        options={{
          headerStyle: {backgroundColor: '#5c3ebc'},
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitle: () => (
            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.cartButton}>
              <Image
                source={require('../../assets/cart.png')}
                style={styles.cartIcon}
              />
              <View style={styles.cartTextContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate(Screens.Cart)}>
                  <Text style={styles.cartText}>
                    &#8378; {totalPrice.toFixed(2)}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name={Screens.ProductDetail}
        component={ProductsDetailScreen}
        options={{
          headerStyle: {backgroundColor: '#5c3ebc'},
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitle: () => (
            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
              Ürün Detayı
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <TagCross size="32" color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => setActive(!active)}
              style={styles.heartButton}>
              <Heart
                size="28"
                color="#32177a"
                variant={active ? 'Bold' : 'Linear'}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name={Screens.Cart}
        component={CartScreen}
        options={{
          headerStyle: {backgroundColor: '#5c3ebc'},
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitle: () => (
            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <TagCross size="26" color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={handleClear} style={styles.trashButton}>
              <Trash size="24" color="#fff" variant="Bold" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const HomeNavigation = ({navigation, route}: MyStackProps) => {
  return <MyStack navigation={navigation} route={route} />;
};

export default HomeNavigation;

const styles = StyleSheet.create({
  cartButton: {
    width: width * 0.22,
    height: 33,
    backgroundColor: 'white',
    marginRight: width * 0.03,
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartIcon: {width: 23, height: 23, marginLeft: 6},
  cartTextContainer: {
    flex: 1,
    height: 33,
    backgroundColor: '#f3effe',
    borderTopRightRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 9,
  },
  cartText: {color: '#5d3ebd', fontWeight: 'bold', fontSize: 12},
  backButton: {paddingLeft: 12},
  heartButton: {paddingRight: 12},
  trashButton: {paddingRight: 12},
});
