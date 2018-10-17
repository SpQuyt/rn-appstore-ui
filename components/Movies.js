import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import Header from './Header';
import ContentList from './ContentList';
import data from './../src/data/dataMovies';

export default class Movies extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header
          navi={this.props.navigation}
          title="Movies">
        </Header>
        <ContentList 
          listData={data}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});