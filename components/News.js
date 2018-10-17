import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import Header from './Header';
import ContentList from './ContentList';
import data from './../src/data/dataNews';

export default class News extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header
          navi={this.props.navigation}
          title="News">
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