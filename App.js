import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import LoadingScreen from './src/screens/LoadingScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';

import FeedScreen from './src/screens/FeedScreen';
import ProfileScreen from './src/screens/ProfileScreen'

const OnboardingStack = createStackNavigator({
  Onboarding: OnboardingScreen
}, {
  headerMode: 'none'
});

const AppStack = createStackNavigator({
  Feed: FeedScreen,
  Profile: ProfileScreen
}, {
  initialRouteName: 'Feed'
});

const RootNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Onboarding: OnboardingStack,
    App: AppStack
  },
  {
    initialRouteName: 'Loading'
  }
);

export default RootNavigator
