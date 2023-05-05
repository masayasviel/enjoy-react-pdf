import React from 'react';
import {
  PDFDownloadLink,
  PDFViewer,
  Text,
  View,
  Font,
  Document,
  StyleSheet
} from '@react-pdf/renderer';

import fontRegular from './fonts/Nasu-Regular.ttf';
import fontBold from './fonts/Nasu-Bold.ttf';
import DefaultPageApp from './components/default-page';

const styles = StyleSheet.create({
  jap: { fontSize: '11pt', fontFamily: 'Nasu-Regular' }
});

const MyDocument = () => {
  Font.register({
    family: 'Nasu-Regular',
    src: fontRegular
  });
  Font.register({
    family: 'Nasu-Bold',
    src: fontBold
  });

  return (
    <Document>
      <DefaultPageApp>
        <View>
          <Text style={styles.jap}>あああabc</Text>
          <Text>Section #2</Text>
        </View>
        <View>
          <Text>Section #2</Text>
        </View>
      </DefaultPageApp>
    </Document>
  )
}

function App() {
  return (
    <>
      <PDFDownloadLink
        document={<MyDocument />}
        fileName="xxx.pdf"
      >{
        ({loading}) => (loading ? 'Loading document...' : 'Download now!')
      }</PDFDownloadLink>

      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    </>
  );
}

export default App;
