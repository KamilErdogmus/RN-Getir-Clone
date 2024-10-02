import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IProduct} from '../modals/types';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/actions/actions';

const {width, height} = Dimensions.get('screen');

const ProductsItem = ({item}: {item: IProduct}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addItemToCart = (product: IProduct) => {
    dispatch(addToCart(product, 1));
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('ProductDetails', {product: item})}>
      <Image style={styles.img} source={{uri: item.image}} />
      <View style={styles.textContainer}>
        <Text style={styles.text1}>
          <Text>&#8378;</Text>
          {item.fiyat}
        </Text>
        <Text style={styles.text2}>
          <Text>&#8378;</Text>
          {item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={styles.price}>{item.name}</Text>
      <Text style={styles.amount}>{item.miktar}</Text>
      <TouchableOpacity
        onPress={() => {
          addItemToCart(item);
        }}
        style={styles.plus}>
        <Text style={styles.icon}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductsItem;

const styles = StyleSheet.create({
  button: {
    width: width * 0.3,
    marginTop: 12,
    height: height * 0.24,
    borderRadius: 12,
    marginLeft: 12,
  },
  img: {
    width: width * 0.3,
    height: width * 0.28,
    borderRadius: 12,
    borderColor: 'gray',
    borderWidth: 0.11,
  },
  textContainer: {flexDirection: 'row', marginTop: 12, alignItems: 'center'},
  text1: {
    fontSize: 12,
    color: '#747990',
    textDecorationLine: 'line-through',
    alignItems: 'center',
  },
  text2: {fontSize: 13, color: '#5d3ebd', fontWeight: 'bold', marginLeft: 4},
  price: {fontSize: 13, fontWeight: '500', color: '#000'},
  amount: {color: '#747990', fontSize: 12, fontWeight: '500', marginTop: 4},
  plus: {
    width: 35,
    height: 35,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    borderRadius: 6,
    position: 'absolute',
    elevation: 5,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    right: -6,
    top: -6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    color: '#5d3ebd',
    fontWeight: '600',
    fontSize: 24,
    alignItems: 'center',
  },
});
