import React from 'react';
import {LogBox, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Navigation from 'src/navigation';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Navigation />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  saContainer: {
    flex: 1,
  },
});

export default App;
