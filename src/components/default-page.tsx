import { ReactNode } from 'react';
import {
  Page,
  StyleSheet
} from '@react-pdf/renderer';

import { PAGE_SIZE } from '../constants/settings';

type PropType  = {
  children?: ReactNode;
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column'
  }
});

const DefaultPageApp = ({ children }: PropType) => {
  return (
    <Page size={PAGE_SIZE} orientation="portrait" style={styles.page}>
      { children }
    </Page>
  );
};

export default DefaultPageApp;
