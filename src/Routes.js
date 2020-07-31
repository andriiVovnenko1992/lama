import React from 'react';
import { Route } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import { JobSeeker } from './pages/JobSeeker';
import FindJobs from './pages/FindJobs';
import RegistrationPage from './pages/registration/RegistrationPage';
import RegistrationPageStepOne from './pages/registrationStepOne/RegistrationPageStepOne';
import JobDetail from "./pages/FindJobs/components/JobDetail";


const routes = [
  { path: '/', Component: JobSeeker },
  { path: '/find-jobs', Component: FindJobs },
  { path: '/find-jobs/:id', Component: JobDetail },
  { path: '/registration-step-1', Component: RegistrationPageStepOne },
  { path: '/registration-step-2', Component: RegistrationPage },
];

const Routes = () => {
  return (
    <>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </>
  );
};

export default Routes;
