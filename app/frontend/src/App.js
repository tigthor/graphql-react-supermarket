import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import login from './components/login/'


function App() {
  return (
    <BrowserRouter>
 
        <CssBaseline />

        <Pace color={theme.palette.primary.light} />
        <Suspense fallback={<Fragment />}>
          <Switch>
            <Route path="/c">
              <LoggedInComponent />
            </Route>
          </Switch>
        </Suspense>
    </BrowserRouter>
  );
}

serviceWorker.register();

export default App;
