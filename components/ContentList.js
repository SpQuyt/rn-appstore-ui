import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Dimensions,
  ImageBackground,
  Modal,
  TouchableOpacity,
  WebView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ContentList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     refreshing: false,
  //     dataSrc: [],
  //   }
  // }

  // fetchData = () => {
  //   return fetch('https://gist.githubusercontent.com/namdaoduy/fa6481a048883b9340731f185943b7f0/raw/4dd747e10a4e0fa5811efd28428367b6822d0fa2/newdata.json')
  //   .then((response) => response.json())
  //   .then((response2) => {
  //     var _this = this;
  //     _this.setState({
  //       dataSrc: response2["movies"]
  //     }, function() {
  //       console.log(_this.state.dataSrc);
  //     });
  //   })
  //   .catch((error) => {
  //     Alert.alert(error);
  //   })
  // }

  // _onRefresh = () => {
  //   this.setState({refreshing: true});
  //   this.fetchData.then(() => {
  //     this.setState({refreshing: false});
  //   });
  // }

  

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          // refreshing={this.state.refreshing}
          // onRefresh={this._onRefresh.bind(this)}
          style={styles.list}
          data={this.props.listData}
          renderItem={ ({item}) => {
              return (
                <ListItem
                  item={item}>
                </ListItem>
              );
            }
          }
          keyExtractor={(index) => {return '' + index}}>
        </FlatList>
      </View>
    );
  }
}

class ListItem extends Component {
  state = {
    modalVisible: false,
    test: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.listItemContainer}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            return;
          }}>
          <ScrollView style={styles.modalScroll}>
            <View style={styles.modalBackground}>
              <ImageBackground
                source={{uri: this.props.item.dataURI}}
                style={styles.imageBackgroundModal}>
                <TouchableOpacity
                  style={{height: 60, alignItems: 'flex-end', padding: 10}}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Icon name='ios-close-circle' size={40} color='#ddddddaa' />
                </TouchableOpacity>
                <View style={styles.footer}
                  blurRadius={50}>
                  <Text style={styles.description}>
                    {this.props.item.description}
                  </Text>
                  <Text style={styles.tag}>
                    {this.props.item.tag}
                  </Text>
                </View>
              </ImageBackground>
            </View>
            
            {(this.props.item.hasVideo == 'yes') ? 
              <View style={{ height: 300, padding: 20 }}>
                <WebView
                  style={{ flex: 1 }}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{uri: this.props.item.videoURI }}
                />
              </View>
              :
              <View></View>
            }
            
            
            <Text style={styles.content}>
              {this.props.item.content}
            </Text>

            
            
          </ScrollView>
        </Modal>
        <TouchableOpacity style={styles.listItem}
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <ImageBackground
            source={{uri: this.props.item.dataURI}}
            style={styles.imageBackground}>
            <View style={styles.footer}
              blurRadius={50}>
              <Text style={styles.description}>
                {this.props.item.description}
              </Text>
              <Text style={styles.tag}>
                {this.props.item.tag}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  listItemContainer: {
    width: '100%',
    height: Dimensions.get('window').height * 0.65,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '90%',
    width: '90%',
    backgroundColor: '#ddd',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 10,
  },
  imageBackground: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  footer: {
    height: "40%",
    backgroundColor: '#cccccccc',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  description: {
    fontSize: 30,
    color: '#333',
    fontWeight: 'bold',
  },
  tag: {
    fontSize: 15,
  },
  modalScroll: {

  },
  modalBackground: {
    height: Dimensions.get('window').height * 0.8,
  },
  imageBackgroundModal: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    fontSize: 23,
    padding: 20,
    lineHeight: 42,
  }
});