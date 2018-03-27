import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import { NavLink as Link } from "react-router-dom"
import { connect } from "react-redux"
import Helmet from "react-helmet"
import homepageStyles from "./homepage.scss"
import aboutStyles from "./aboutpage.scss"
import { loadQuestions } from "./appActions"
import * as appAction from "./appActions"
import Menu from "./Menu"

class ProductItemContainer extends Component {
  static fetchData({ store, params }) {
    return store.dispatch(appAction.loadQuestions(params))
  }

  componentDidMount() {
    this.props.loadQuestions()
  }
  render() {
    const { test, location, params, match } = this.props
    let render = ""
    if (test && test.get("res")) {
      test.get("res").map((v, k) => {
        render += " " + v
      })
    }
    return (
      <div>
        <Helmet title="Welcome to our Home Page" />
        {JSON.stringify(location)}
        {JSON.stringify(match)}

        <Menu />
        {render}

        <h1>Item</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { test: state.get("test") }
}
export default connect(mapStateToProps, { loadQuestions })(ProductItemContainer)
