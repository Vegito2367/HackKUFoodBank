import React from 'react';
import { Text, Button, View } from 'react-native';

type TestProps = {
  navigation: any;
};

const Test: React.FC<TestProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Hey</Text>
      <Button title="Go to Admin" onPress={() => navigation.navigate("Admin")} />
    </View>
  );
};

export default Test;