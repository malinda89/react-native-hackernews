import React, { Component } from 'react';
import { 
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl
} from 'react-native';

import ArticleList from './ArticleList';

class Main extends Component {
  constructor() {
    super();

    // Bind functions
    this.getArticleIDs = this.getArticleIDs.bind(this);
    this.getArticles = this.getArticles.bind(this);

    // Initial state
    this.state = {
      isRefreshing: false,
      news: []
    }
  }

  componentDidMount() {
    this.getArticleIDs();
  }

  // Get article IDs
  getArticleIDs() {
    this.setState({
      isRefreshing: true
    })

    fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
      .then((response) => response.json())
      .then((articleIdArr) => {
        this.getArticles(articleIdArr.slice(0, 10));
      })
      .catch((error) => {
        this.setState({
          isRefreshing: false
        })
        
        console.log(error);
      });
  }
    
  // Get article json
  getArticles(articleIdArr) {
    const promiseArr =  articleIdArr.map((articleId) => {
      return fetch('https://hacker-news.firebaseio.com/v0/item/' + articleId + '.json')
        .then((response) => response.json());
    });

    Promise.all(promiseArr).then((articles) => {
      this.setState({
        news: articles,
        isRefreshing: false
      })
    });
  }

  render() {
    return (
      <View>

        <View>  
          <Text style={styles.header}>~ Hacker News (news.ycombinator.com) ~</Text>
          
          <ScrollView 
            style={styles.container}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this.getArticleIDs}
                tintColor="#ff0000"
                title="Loading..."
                titleColor="#00ff00"
                colors={['#ff0000', '#00ff00', '#0000ff']}
                progressBackgroundColor="#ffff00"
              />
            }>

          <View>
            <ArticleList list={this.state.news}></ArticleList>
          </View>

          </ScrollView>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
   header: {
    color: 'orange',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    fontSize: 17
   },
   container: {
    // height: 300,
    //backgroundColor: 'white'
   }
})

export default Main;