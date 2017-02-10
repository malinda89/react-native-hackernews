import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Linking
} from 'react-native';

class Article extends Component {
  render() {
    const articleDetails = this.props.details;

    return (
      <View style={styles.item}>
        <Text style={styles.article} onPress={() => Linking.openURL(articleDetails.url)}> {articleDetails.title} </Text>
        <Text style={styles.author}>By: {articleDetails.by} </Text>
      </View>
    );
  }
}

export default Article;

const styles = StyleSheet.create ({
  item: {
    margin: 15,
    padding: 15,
    borderColor: 'black',
    borderWidth: 1
  },
  article: {
    color: 'orange',
    fontWeight: 'bold'
  },
  author: {
    color: 'green',
    fontWeight: 'normal',
    fontStyle: 'italic'
  }
});