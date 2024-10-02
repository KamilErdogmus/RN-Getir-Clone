import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {detailTexts} from '../constants/constants';
import {ArrowDown2} from 'iconsax-react-native';

const TextComponent = ({detail, index}: {detail: string; index: number}) => {
  return (
    <View style={styles.component}>
      <Text
        style={{
          fontSize: index === 0 ? 11 : 13,
          color: index === 0 ? '#000' : '#687482',
          fontWeight: '500',
        }}>
        {detail}{' '}
      </Text>
      {index !== 0 && <ArrowDown2 size={24} color="#9f9f9f" />}
    </View>
  );
};

const DetailProperty = () => {
  const [details] = useState<string[]>(detailTexts);
  return (
    <View style={styles.content}>
      {details.map((item, index) => (
        <TextComponent key={index} detail={item} index={index} />
      ))}
    </View>
  );
};

export default DetailProperty;

const styles = StyleSheet.create({
  component: {
    paddingVertical: 12,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.4,
    borderBlockColor: 'lightgray',
  },

  content: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
