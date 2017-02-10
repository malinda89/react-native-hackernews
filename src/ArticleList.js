import React, { Component } from 'react';
import { 
  View
} from 'react-native';

import Article from './Article';

class ArticleList extends Component {
  render() {
    
    const createArticle = (item) => {
      return (
        <Article key={item.id} details={item}/>
      );
    };

    return <View>{this.props.list.map(createArticle)}</View>
  }
}

export default ArticleList;