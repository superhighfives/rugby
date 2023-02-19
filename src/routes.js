import React from "react"
import { Route, IndexRoute } from "react-router"

import App from "./components/App"
import Index from "./components/Index"

export default (
  <Route name="app" component={App} path="/">
    <IndexRoute name="index" component={Index} />
  </Route>
)