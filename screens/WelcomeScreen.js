import React, { Component } from 'react';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'What up doe', color: '#03194f' },
  { text: 'Set location', color: '#D33324'},
  { text: 'Swipe through jobs', color: '#03194f'}
];

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    return(
      <Slides 
        data={SLIDE_DATA} 
        onComplete={this.onSlidesComplete}
        />
    );
  }
}

export default WelcomeScreen;
