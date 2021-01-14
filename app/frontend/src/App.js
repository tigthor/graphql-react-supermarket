import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/login/Login'


function App() {
  return (
    <BrowserRouter>
 
        <CssBaseline />
        <Suspense fallback={<Fragment />}>
          <Switch>
            <Route path="/">
              <Loggin />
            </Route>
          </Switch>
        </Suspense>
    </BrowserRouter>
  );
}

serviceWorker.register();

export default App;
