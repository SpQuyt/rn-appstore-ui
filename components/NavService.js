// NavigationService.js

import { NavigationActions } from 'react-navigation';


var MasterNav = {
  app: {},
  homeRoot: {},
  homeMain: {},
  navigate: (navigator, routeName, params) => {
    navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      })
    );
  },
}


// add other navigation functions that you need and export them

export default MasterNav;