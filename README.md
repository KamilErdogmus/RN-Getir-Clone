# Getir-Clone in React Native-CLI

## Description

This is a clone of the Getir app built using **React Native-CLI**, offering a seamless and responsive UI similar to the popular delivery app. The app integrates various libraries for efficient state management, smooth navigation, and enhanced user experience

## Libraries

- **react-redux**: Facilitates integrating Redux with React components for state management.
- **redux**: A predictable state container that helps manage the global state of an application.
- **redux-thunk**: A middleware for Redux that enables writing asynchronous logic that interacts with the Redux store.
- **@react-native-masked-view/masked-view**: Provides a masked view for React Native, allowing parts of a view to be hidden or revealed.
- **@react-navigation/bottom-tabs**: Enables the creation of bottom tab navigation for switching between screens.
- **@react-navigation/native**: The core navigation library for managing screen navigation in React Native.
- **@react-navigation/stack**: Implements stack-based navigation, allowing screens to be pushed and popped like a stack.
- **@redux-devtools/extension**: Integrates Redux with developer tools for tracking and debugging state changes.
- **iconsax-react-native**: A collection of customizable icons for React Native apps.
- **react-native-gesture-handler**: Provides gesture handling in React Native, such as swipes, pinches, and more.
- **react-native-safe-area-context**: Handles safe area insets to ensure that content isn’t obscured by device notches or status bars.
- **react-native-screens**: Optimizes navigation by utilizing native screen management for better performance.
- **react-native-svg**: Adds support for scalable vector graphics (SVG) in React Native apps.

## Preview

![](/assets/RN-Getir-Clone.gif)

## Api

[Canva-Design](https://www.canva.com/design/DAE6raJ09CA/_swn0NPca1mRG3hTlGFkgg/view)

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/KamilErdogmus/RN-Getir-Clone.git
```

2. Navigate to the project directory:

```bash
cd your-repository
```

3. Install dependencies:

#### Using npm

```bash
npm install
```

#### Using yarn

```bash
yarn install
```

If you're using MacOS, navigate to the ios folder and install CocoaPods dependencies:

```bash
cd ios
```

```bash
 pod install
```

```bash
 cd ..
```

## Step 1: Start the Metro Server

First, you'll need to start **Metro**, the JavaScript _bundler_ that comes with React Native.

To start Metro, run the following command from the _root_ of your React Native project:

#### Using npm

```bash
npm start
```

#### Using Yarn

```bash
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

#### Using npm

```bash
npm run android
```

#### Using Yarn

```bash
yarn android
```

### For iOS

##### using npm

```bash
npm run ios
```

#### Using Yarn

```bash
yarn ios
```

### If you encounter an error while starting the server

```bash
npx react-native start --reset-cache
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
