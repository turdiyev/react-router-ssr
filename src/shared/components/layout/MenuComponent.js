import React, { Component } from "react"
import { NavLink as Link } from "react-router-dom"
import { connect } from "react-redux"

class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to={"/"}>Homepage</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { test: state.test }
}
export default connect(mapStateToProps, {})(Menu)
