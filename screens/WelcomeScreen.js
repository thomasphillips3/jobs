import _ from 'lodash';
import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { AsyncStorage } from 'react-native';

import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'What up doe', color: '#03194f' },
  { text: 'Set location', color: '#D33324'},
  { text: 'Swipe through jobs', color: '#03194f'}
];

class WelcomeScreen extends Component {
  state = { token: null }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token });
    } else {
      this.setState({ token: false })
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }
    
    return(
      <Slides 
        data={SLIDE_DATA} 
        onComplete={this.onSlidesComplete}
        />
    );
  }
}

export default WelcomeScreen;
