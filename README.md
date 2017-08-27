# react-native-asyncstorage

Declarative AsyncStorage component for React Native


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

- AsyncStorage.GetItem
- AsyncStorage.SaveItem

## Usage Examples

Fetch apiToken from `AsyncStorage` before loading the rest of the app

```jsx
<AsyncStorage.GetItem
  itemKey='apiToken'
  render={({ loading, value, error }) => {

    if (loading) return <AppLoading />

    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )

  }}
/>

```

## Shoutout

Thanks to [@tkh44 for the idea and his localforage version](https://github.com/tkh44/react-localforage). He makes a lot of great shit, follow him on [Twitter](https://www.twitter.com/tkh44)
