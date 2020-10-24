import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps160455Navigator from '../features/Maps160455/navigator';
import ArticleList160433Navigator from '../features/ArticleList160433/navigator';
import ArticleList160432Navigator from '../features/ArticleList160432/navigator';
import ArticleList160431Navigator from '../features/ArticleList160431/navigator';
import ArticleList160414Navigator from '../features/ArticleList160414/navigator';
import ArticleList160413Navigator from '../features/ArticleList160413/navigator';
import ArticleList160412Navigator from '../features/ArticleList160412/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps160455: { screen: Maps160455Navigator },
ArticleList160433: { screen: ArticleList160433Navigator },
ArticleList160432: { screen: ArticleList160432Navigator },
ArticleList160431: { screen: ArticleList160431Navigator },
ArticleList160414: { screen: ArticleList160414Navigator },
ArticleList160413: { screen: ArticleList160413Navigator },
ArticleList160412: { screen: ArticleList160412Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
