import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {filteredCategories} from '../constants/constants';

const {height} = Dimensions.get('screen');

const TypeBox = ({
  item,
  active,
  setActive,
}: {
  item: string;
  active: string;
  setActive: (item: string) => void;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setActive(item)}
      style={[styles.button, active === item ? styles.activeBtn : null]}>
      <Text style={[styles.text, active === item ? styles.activeText : null]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const TypeFiltering = () => {
  const [active, setActive] = useState<string>(filteredCategories[0]);
  return (
    <ScrollView
      style={styles.main}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={true}>
      {filteredCategories.map((item, index) => (
        <TypeBox
          item={item}
          setActive={setActive}
          key={index}
          active={active}
        />
      ))}
    </ScrollView>
  );
};

export default TypeFiltering;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: height * 0.07,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.6,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    paddingVertical: height * 0.012,
    flexDirection: 'row',
  },
  text: {color: '#7849f7', fontSize: 12, fontWeight: '600'},
  button: {
    borderWidth: 1,
    borderColor: '#D8D7DE',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeBtn: {
    backgroundColor: '#5c3ebc',
    height: height * 0.045,
    borderWidth: 2,
  },
  activeText: {color: '#fff'},
});
