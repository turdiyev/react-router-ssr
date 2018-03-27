import React from "react"
import ReactDOMServer from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"
import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import { Provider } from "react-redux"
import { Helmet } from "react-helmet"
import thunk from "redux-thunk"
import debug from "debug"
import App from "./shared/App"
import routes from "./shared/routes"
import configureStore from "./shared/configureStore"

import Template from "./template"

export default function serverRenderer({ clientStats, serverStats }) {
  return async (req, res, next) => {
    try {
      console.log("SERVER RENDERING STARTED")
      const context = {}
      // Create a new Redux store instance
      const store = configureStore()

      let foundPath = null
      let { path, component } =
        routes.find(({ path, exact }) => {
          foundPath = matchPath(req.url, {
            path,
            exact,
            strict: false
          })
          return foundPath
        }) || {}
      if (!component) component = {}

      if (!component.fetchData)
        component.fetchData = () => new Promise(resolve => resolve())

      await component.fetchData({
        store,
        params: foundPath ? foundPath.params : {}
      })
      console.log("Server Renderer =====> ", store)

      // console.log('ready')
      const markup = ReactDOMServer.renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      )
      const helmet = Helmet.renderStatic()

      const preloadedState = store.getState()

      if (context.url)
        //process redirect through express by redirecting
        res.redirect(context.status, "http://" + req.headers.host + context.url)
      else if (foundPath && foundPath.path == "/404")
        //if 404 then send our custom 404 page with initial state and meta data, this is needed for status code 404
        res.status(404).send(Template({ html, preloadedState, helmet }))
      else
        //else send down page with initial state and meta data
        res.status(200).send(
          Template({
            markup: markup,
            helmet: helmet,
            preloadedState
          })
        )
    } catch (error) {
      res.status(400).send(
        Template({
          markup: "An error occured.",
          preloadedState: {},
          helmet: {}
        })
      )
    }
  }
}
