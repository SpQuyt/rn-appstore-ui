
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSrc: [],
    }
  }

  static navigationOptions = {
    title: 'Welcome Home!',
  };

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((response2) => {
      var _this = this;
      _this.setState({
        isLoading: false,
        dataSrc: response2.movies
      }, function() {
        console.log(_this.state.dataSrc);
      });
    })
    .catch((error) => {
      Alert.alert(error);
    })
  }

  render() {
    const username = this.props.navigation.getParam('username', 'Anonymous');
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <Text>
            Hihi
          </Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('./../src/img/logo.png')}
            style = {styles.logoImage}
          />
        </View>
        
        <Text style={styles.welcome}>
          Hello {username}!
        </Text>
        <FlatList
        style={{flex: 1}}
          data={this.state.dataSrc}
          renderItem={ ({item}) => {
              return (
                <Text>
                  {item.title}
                </Text>
              );
            }
          }
          keyExtractor={(index) => {return '' + index}}
          >
        </FlatList>
      </View>
    );
  }
}