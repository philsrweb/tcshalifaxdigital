![React Native Starter Kit](/docs/tcs-banner.png)

# Halifax Digital Conference Mobile App Starter Kit

## #

--------------------------------------------------------------------------------

## Introduction

This boilerplate launches with a [React web app](https://reactjs.org/) and [React Native app](https://facebook.github.io/react-native/) sharing a single code base. It shares the 'business logic' (_i.e. models, containers_) across the platforms, whilst allowing flexibility in View components to ensure your project looks and feels native in each platform.

The project is _super_ helpful to kick-start your next project, as it provides a lot of the common tools you may reach for, all ready to go. Specifically:

- A shared React and React Native structure
- **Flux architecture**

  - [Redux](https://redux.js.org/docs/introduction/)
  - Redux Wrapper: [Rematch](https://github.com/rematch/rematch)

- **Routing and navigation**

  - [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) for native mobile
  - [React Router](https://github.com/ReactTraining/react-router) for web

- **Data Caching / Offline**

  - [Redux Persist](https://github.com/rt2zz/redux-persist)

- **UI Toolkit/s**

  - [Native Base](https://nativebase.io/) for native mobile
  - [Bootstrap](https://getbootstrap.com/) for web

- **Simpler mobile app development** through

  - [Expo](https://expo.io/)

- **User authentication** example through

  - [Firebase](https://firebase.google.com/)

- **API/Data example**

  - Shows how to read/write data from/to an external API (in our case, [Firebase](https://firebase.google.com/))

- **Code Linting** with

  - [Airbnb's JS Linting](https://github.com/airbnb/javascript) guidelines

--------------------------------------------------------------------------------

## 📖 Docs

- [Setup your own Firebase](/docs/firebase.md)
- [Understanding the file structure](/docs/file-structure.md)
- [FAQs & Opinions](/docs/faqs.md)
- [Testing, Deploying & Publishing](/docs/publishing.md)
- [Tests & testing](/docs/testing.md) (coming soon...)
- [Contributing to this project](/docs/contributing.md)

--------------------------------------------------------------------------------

## 🚀 Getting Started

### 0\. Prerequisites

Make sure you have Expo CLI installed

- Install Expo on your mobile device (android and iOS only)
- Visit <https://nodejs.org/en/download/>
- Follow instructions to download and install NODE.JS
- Google for "yarn install"
- Click the link with the title "Installation | Yarn"
- Make sure your operating system is selected
- Follow the instructions to download and install Yarn
- Next goto a command prompt (in windows it is cmd)
- Type the following command:

  ```bash
  npm install -g expo-cli
  ```

### 1\. Clone and Install

_*It's recommended that you install [React Native Debugger](https://github.com/jhen0409/react-native-debugger/releases) and open before `yarn start`._

```bash
# Clone the repo
git clone git@github.com:philsrweb/tcshalifaxdigital.git

# Install dependencies
yarn install
```

### 2.1\. Run the _React Native_ App

```bash
# Start the React Native packager
yarn start
```

Instructions are shown in the command prompt. You can select to open it in:

- An emulator (either iOS or Android)
- Your mobile device with the [Expo app](https://expo.io/). It will reload if you save edits to your files and you will see build errors and logs in the terminal.

### 2.2\. Run the _Web_ App

```bash
# Starts are local live-reload server at:
# http://localhost:3001
yarn run web
```

Via webpack, starts a localhost server on port 3001 <http://localhost:3001>.

- Save code and it auto refreshes
- Install [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) into Chrome to see the state of Redux
