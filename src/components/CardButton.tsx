import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {IProduct} from '../modals/types';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/actions/actions';

const {height} = Dimensions.get('window');

interface IBtnProps {
  item: IProduct;
}

const CardButton: React.FC<IBtnProps> = ({item}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item, 1));
  };

  return (
    <TouchableOpacity onPress={handleAddToCart} style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Sepete Ekle</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
    height: height * 0.13,
    marginTop: 40,
  },
  innerContainer: {
    height: height * 0.06,
    marginTop: -10,
    width: '94%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '3%',
    backgroundColor: '#5d39c1',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
