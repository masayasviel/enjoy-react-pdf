import {
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';

import { PAGE_SIZE } from '../constants/settings';
import React from 'react';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: '48pt',
    fontFamily: 'Nasu-Regular'
  }
});

const TitlePageApp = () => {
  return (
    <Page size={PAGE_SIZE} orientation="portrait" style={styles.page}>
      <View>
        <Text style={styles.title}>タイトル</Text>
      </View>
    </Page>
  );
};

export default TitlePageApp;
