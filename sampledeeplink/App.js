import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';

const App = () => {
  const handleDynamicLink = link => {
    console.log('Foreground link ', link);
  };

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        console.log('Background link ', link);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>App</Text>
    </View>
  );
};

export default App;
