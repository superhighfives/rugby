import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from "./routes"
import history from "./history"

render(
  <Router children={routes} history={history} onUpdate={() => window.scrollTo(0,0)} />, document.getElementById('app')
)