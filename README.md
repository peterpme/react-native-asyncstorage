# react-native-asyncstorage

📬 📫 🗄 Declarative AsyncStorage component for React Native

[![npm version](https://badge.fury.io/js/react-native-asyncstorage.svg)](https://badge.fury.io/js/react-native-asyncstorage)

- [Installation](#installation)
- [API](#api)
- [Usage Examples](#usage-examples)

## Installation

```zsh
yarn add react-native-asyncstorage
```

or

```zsh
npm install --save react-native-asyncstorage
```

## API

- [AsyncStorage.GetItem](#asyncstoragegetitem)
- [AsyncStorage.SetItem](#asyncstoragesetitem)

## AsyncStorage.GetItem

```js
itemKey:  string
render: {
  loading: boolean,
  value: string | object,
  error: string
}
```

## AsyncStorage.SetItem

```js
itemKey: string
itemValue: string | object
render: {
  loading: boolean,
  value: string | object,
  error: string
}
```

## Usage Examples

- Fetch `username` from `AsyncStorage` before loading the rest of the app

```jsx
<AsyncStorage.GetItem
  itemKey='username'
  render={({ loading, value, error }) => {

    if (loading) return <AppLoading />
    
    return (
      <View style={styles.container}>
        <Text>Welcome to my app, ${value}</Text>
      </View>
    )
    
  }}
/>
```

## Planned Updates

- multiGet & multiSet support for multiple keys

## Shoutout

Thanks to [@tkh44 for the idea and his localforage version](https://github.com/tkh44/react-localforage). He makes a lot of great shit, follow him on [Twitter](https://www.twitter.com/tkh44)
