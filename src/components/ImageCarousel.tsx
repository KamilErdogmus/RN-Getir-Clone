import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View,
  ViewToken,
} from 'react-native';
import React, {useState} from 'react';

const {width, height} = Dimensions.get('window');

const ImageCarousel = ({images}: {images: string[]}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onViewRef = React.useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index || 0);
      }
    },
  );

  const configViewRef = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.5}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={configViewRef.current}
        onViewableItemsChanged={onViewRef.current}
        keyExtractor={(item, index) => index.toString()}
        data={images}
        style={{width: width * 0.5, height: height * 0.18}}
        renderItem={({item}) => (
          <Image
            style={{width: 0.5 * width, height: height * 0.21}}
            source={{uri: item}}
            resizeMode="contain"
          />
        )}
      />
      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? '#5D3EBD' : '#F2F0FD',
                transform: [{scale: index === activeIndex ? 1.2 : 1}],
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 25,
    height: height * 0.25,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 20,
    marginVertical: 2,
    marginHorizontal: 5,
  },
});
