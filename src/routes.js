import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Welcome from './pages/Welcome';
import Repositories from './pages/Repositories';
import Organizations from './pages/Organizations';

import {colors} from '~/Styles';

const Routes = userLogged =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        User: createBottomTabNavigator(
          {
            Repositorios: {screen: Repositories},
            Organizações: {screen: Organizations},
          },
          {
            tabBarOptions: {
              activeTintColor: colors.white,
              inactiveTintColor: colors.whiteTransparent,
              showIcon: true,
              showLabel: false,
              style: {
                backgroundColor: colors.secondary,
              },
            },
          },
        ),
      },
      {
        initialRouteName: userLogged ? 'User' : 'Welcome',
      },
    ),
  );

export default Routes;
