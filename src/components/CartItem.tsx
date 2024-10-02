import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IProduct} from '../modals/types';
import {useDispatch} from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../redux/actions/actions';

const {height, width} = Dimensions.get('window');

const CartItem = ({
  product,
  quantity,
}: {
  product: IProduct;
  quantity: number;
}) => {
  const dispatch = useDispatch();

  const handleReduce = () => {
    if (quantity > 1) {
      dispatch(decreaseQuantity(product.id));
    } else {
      dispatch(removeFromCart(product.id));
    }
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id));
  };

  return (
    <View style={styles.main}>
      <View style={styles.section}>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={{uri: product.image}} />
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>&#8378;{product.fiyatIndirimli}</Text>
            <Text style={styles.amount}>{product.miktar}</Text>
          </View>
        </View>
        <View style={styles.secondContainer}>
          <TouchableOpacity onPress={handleReduce} style={styles.content}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>
          <View
            style={[
              styles.content,
              {
                backgroundColor: '#5d3ebd',
                height: height * 0.037,
                justifyContent: 'center',
              },
            ]}>
            <Text style={styles.count}>{quantity}</Text>
          </View>
          <TouchableOpacity onPress={handleIncrease} style={styles.content}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  main: {width: '100%', backgroundColor: 'white'},
  section: {
    height: height * 0.13,
    width: width * 0.92,
    borderBottomWidth: 0.7,
    borderBottomColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
    backgroundColor: 'white',
  },
  container: {flexDirection: 'row', elevation: 3},
  imgContainer: {
    borderWidth: 0.45,
    borderColor: 'lightgrey',
    borderRadius: 10,
    padding: 4,
  },
  img: {
    width: height * 0.09,
    height: height * 0.09,
  },
  innerContainer: {marginLeft: 8},
  text: {color: '#000'},
  name: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
    maxWidth: width * 0.4,
  },
  amount: {fontSize: 12, marginTop: 3, color: '#848897'},
  price: {fontSize: 15, marginTop: 6, color: '#5d3ebd', fontWeight: 'bold'},
  secondContainer: {
    flexDirection: 'row',
    width: width * 0.2,
    height: height * 0.0375,
    shadowOpacity: 0.4,
    shadowColor: 'gray',
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'lightgrey',
  },
  content: {flex: 1, alignItems: 'center'},
  count: {color: 'white', fontWeight: 'bold', fontSize: 12},
});
