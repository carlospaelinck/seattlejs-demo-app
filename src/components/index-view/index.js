import React, { Component } from "react"
import {
  View,
  ListView,
  NativeModules,
  NativeEventEmitter
} from "react-native"
import { FullView } from "../styled"
import { TransactionsList } from "../list"
import { generateData } from "../../data"

const { WatchKitModule } = NativeModules
const watchKitModuleEmitter = new NativeEventEmitter(WatchKitModule)

export default class IndexView extends Component {
  static navigationOptions = {
    title: "Products"
  }
  constructor() {
    super(...arguments)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (lhs, rhs) => lhs.id !== rhs.id
    })
    this.state = { dataSource }
  }
  componentWillMount() {
    const data = generateData()
    WatchKitModule.activateWatchKitSession()
    WatchKitModule.loadData(data)
    this.setState(prevState => ({
      dataSource: prevState.dataSource.cloneWithRows(data)
    }))
  }
  componentDidMount() {
    this.subscription = watchKitModuleEmitter
      .addListener("ItemSelected", sender => {

      })
  }
  componentWillUnmount() {
    this.subscription.remove()
  }
  handleButtonPress = () => {
    WatchKitModule.sendMessage()
  }
  render() {
    const { dataSource } = this.state
    return (
      <FullView>
        <TransactionsList
          dataSource={dataSource}
        />
      </FullView>
    );
  }
}
