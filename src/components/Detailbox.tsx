import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Iprops {
  price: number;
  name: string;
  amount: string;
}

const Detailbox = ({price, name, amount}: Iprops) => {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>
        <Text>&#8378;</Text>
        {price}
      </Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
};

export default Detailbox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  price: {color: '#5d3ebd', fontWeight: 'bold', margin: 12, fontSize: 20},
  name: {color: '#000', fontSize: 16, fontWeight: '600'},
  amount: {
    color: '#848897',
    fontWeight: '600',
    marginTop: 8,
    paddingBottom: 24,
  },
});
