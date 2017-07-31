import { StackNavigator } from "react-navigation"
import IndexView from "./components/index-view"

export const App = StackNavigator({
  Index: { screen: IndexView }
})
