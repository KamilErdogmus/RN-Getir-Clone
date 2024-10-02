import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import MainHeader from '../components/MainHeader';
import BannerCarousel from '../components/BannerCarousel';
import MainCategory from '../components/MainCategory';

const HomeScreen = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={styles.main}>
      <MainHeader />
      <BannerCarousel />
      <MainCategory />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({main: {backgroundColor: '#f5f5f5'}});
