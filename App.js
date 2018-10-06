import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import LoadingScreen from './src/screens/LoadingScreen';
import FeedScreen from './src/screens/FeedScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';

const AppStack = createStackNavigator({ Feed: FeedScreen });
const OnboardingStack = createStackNavigator({
  Onboarding: OnboardingScreen
}, {
  headerMode: 'none'
});

const RootNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppStack,
    Onboarding: OnboardingStack
  },
  {
    initialRouteName: 'Loading'
  }
);

export default RootNavigator
