import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';


const AppNavigator = () => {
 

  return (
    <IonReactRouter>

        <IonRouterOutlet>
          <Switch>
            <Route path={Tab1} component={SignIn} exact />
            <Route path={SIGN_UP} component={SignUp} exact />
            <Route path={FORGOT_PASSWORD} component={ForgotPassword} exact />
            <Redirect path="/" to={SIGN_IN} exact />
          </Switch>
        </IonRouterOutlet>
      
    </IonReactRouter>
  );
};

AppNavigator.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  appLoading: PropTypes.bool.isRequired,
};

export default AppNavigator;
