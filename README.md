# React-Native Hacker News App
This app fetches the latest news from *news.ycombinator.com* and displays them in a scrollable view. 

Main **react-native** components used in this app are:
* ScrollView
* StyleSheet
* Text
* View
* RefreshControl
* Linking

## API calls used are as follow:
* `https://hacker-news.firebaseio.com/v0/newstories.json` - to fetch article IDs
* `https://hacker-news.firebaseio.com/v0/item/ARTICLE_ID.json` - to fetch the actual article JSON by ID

## Build Steps

* `npm install`
* `npm start`

## Running On Android

* `react-native run-android`

## Running On IOS

* `react-native run-ios`

