## React Native for iPhone + watch

This is a demo app written in React Native app for iPhone that uses a WatchConnectivity Native Module for communication with watch. The iPhone app is written in JavaScript, React Native module in Objective-C and the watch in Swift.


## Getting Started
This React Native app works with Xcode 8.3 or Xcode 9 and will require both iPhone and watch SDKs to run. You will also need the react native CLI to install node modules for the project.

```
$ yarn install
$ open ios/SeattleJSApp.xcodeproj
```

To run on a physical iPhone and watch you will need an Apple Developer account with a iPhone and watch for provisioned for development.

## Communication between iPhone and watch

The [WatchKitModule](https://github.com/carlospaelinck/seattlejs-demo-app/blob/master/ios/WatchKitModule.m) class acts as a liason between the React Native Javascript app for iPhone and the Swift watch app. This class serves as a generic module that can be used to send payloads of data to watch.
