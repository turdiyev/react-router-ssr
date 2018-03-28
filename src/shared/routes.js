import HomeContainer from "./containers/Home/HomeContainer"
import WelcomeContainer from "./containers/Landing/WelcomeContainer"

export default [
  {
    path: "/",
    component: HomeContainer,
    exact: true
  },
  {
    path: "/welcome",
    component: WelcomeContainer,
    exact: true
  }
]
