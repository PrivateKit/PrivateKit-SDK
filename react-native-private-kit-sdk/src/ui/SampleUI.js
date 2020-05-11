import { View, Button } from "react-native";
import React, { Component } from "react";

class SampleUI extends Component {
  onPressLearnMore() {
    console.log("hello from library");
  }
  render () {
    return (
      <View>
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

export default SampleUI;