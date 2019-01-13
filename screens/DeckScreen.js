import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';

import Swipe from '../components/Swipe';

class DeckScreen extends Component {
  render() {
    return(
      <View>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="No more jobs" />
    )
  }
  renderCard(job) {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };

    return (
      <Card
        title={job.jobtitle}>
        <View style={{height: 300}}>
          <MapView
            scrollEnabled={false}
            style={{flex: 1}}
            cacheEnabled={Platform.OS === 'android' ? true : false}
            initialRegion={initialRegion}
          />
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>
          {job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')} 
        </Text>
      </Card>
    );
  }
}

function mapStateToProps({ jobs }) {
  return { jobs: jobs.results }
};

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
};

export default connect(mapStateToProps)(DeckScreen);

