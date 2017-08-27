# react-native-asyncstorage

Declarative AsyncStorage component for React Native

Thanks to [@tkh44 for the idea and his localforage version](https://github.com/tkh44/react-localforage)

- [Installation](#installation)
- [API](#api)
- [Usage Examples](#usage-examples)

## Installation

```bash
yarn add react-native-asyncstorage
```

or

```bash
npm install --save react-native-asyncstorage
```

## API

- AsyncStorage.GetItem
- AsyncStorage.SaveItem

## Usage Examples

Fetch apiToken from `AsyncStorage` before loading the rest of the app

```es6
<AsyncStorage.getItem
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
