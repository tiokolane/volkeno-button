This project is a stylised button of volkeno


#### This package is currently only maintained for Expo managed React Native projects, support for bare React Native projects is coming soon

## Installation

Add the dependency:

```
npm i volkeno-button
```

or

```
yarn add volkeno-button
```


## Peer Dependencies

##### IMPORTANT! You need install them.

```json
 "react": "^16.0.0-beta.5",
 "react-native": "^0.49.1"
```

## Basic Usage

**First step:** import the component:

```javascript
import ButtonVolkeno from 'volkeno-button';
```

**Second step:** Use the button

```jsx
<ButtonVolkeno 
        textButton="Click it"
        styles = {{backgroundColor:"green"}}/>
/>
```

### Example Application

- I just shared the example project on Expo, simply run on Snack to check what it is:
  [via Expo](https://snack.expo.io/@kpose/react-native-social-fab)

### Configuration - Props

**FloatingButton**

| Property         |   Type   |          Default           | Description                                          |
| ---------------- | :------: | :------------------------: | ---------------------------------------------------- |
| textButton       | string   |             -              | text inside button                                   |
| styles           | function |             -              | style for the button                                 |


## Author

Prince Diouf, princediouf95@gmail.com

## License

React Native  Button Library is available under the MIT license. See the LICENSE file for more info.
