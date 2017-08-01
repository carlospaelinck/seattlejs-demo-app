import React from "react"
import { Provider } from "react-redux"
import { StackNavigator } from "react-navigation"
import configureStore from "./modules/configure-store"
import IndexView from "./components/index-view"
import DetailView from "./components/detail-view"

const store = configureStore()

const AppNavigator = StackNavigator({
  Index: {
    screen: IndexView
  },
  Detail: {
    path: "detail/:id",
    screen: DetailView
  }
})

export const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
)
