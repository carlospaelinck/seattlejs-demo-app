import React, { Component } from "react"
import { connect } from "react-redux"
import {
  getProductData as getProductDataAction,
  productsSelector
} from "../../modules"
import {
  ListView,
  NativeModules,
  NativeEventEmitter
} from "react-native"
import { FullView } from "../styled"
import { TransactionsList } from "../list"

const { WatchKitModule } = NativeModules
const watchKitModuleEmitter = new NativeEventEmitter(WatchKitModule)

class IndexView extends Component {
  static navigationOptions = {
    title: "Products"
  }

  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (lhs, rhs) => lhs.id !== rhs.id
    })
  }

  componentWillMount() {
    WatchKitModule.activateWatchKitSession()
  }

  componentDidMount() {
    const {
      navigation: { navigate },
      getProductData
    } = this.props
    getProductData()
    this.subscription = watchKitModuleEmitter
      .addListener("ItemSelected", ({ id }) => navigate("Detail", { id }))
  }

  componentWillReceiveProps(nextProps) {
    const { products } = nextProps
    WatchKitModule.loadData(products)
    this.setState(prevState => ({
      dataSource: prevState.dataSource.cloneWithRows(products)
    }))
  }

  componentWillUnmount() {
    this.subscription.remove()
  }

  render() {
    const {
      state: { dataSource },
      props: { navigation: { navigate } }
    } = this
    return (
      <FullView>
        <TransactionsList
          dataSource={dataSource}
          navigate={navigate}
        />
      </FullView>
    );
  }
}

const mapStateToProps = state => ({
  products: productsSelector(state)
})

const mapDispatchToProps = {
  getProductData: getProductDataAction
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexView)
