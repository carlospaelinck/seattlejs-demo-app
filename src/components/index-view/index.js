import React, { Component } from "react"
import { connect } from "react-redux"
import {
  getDoggos as getDoggosAction,
  loadMoreDogs as loadMoreDogsAction,
  doggosSelector
} from "../../modules"
import {
  Button,
  ListView,
  NativeModules,
  NativeEventEmitter
} from "react-native"
import { FullView } from "../styled"
import { TransactionsList } from "../list"

const { WatchKitModule } = NativeModules
const watchKitModuleEmitter = new NativeEventEmitter(WatchKitModule)

class IndexView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Doggos",
    headerRight: (
      <Button
        title="More Dogs"
        onPress={() => navigation.state.params.loadMoreDogs()}
      />
    )
  })

  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (lhs, rhs) => lhs.id !== rhs.id
    })
  }

  componentWillMount() {
    this.props.navigation.setParams({ loadMoreDogs: this.foo })
    WatchKitModule.activateWatchKitSession()
  }

  componentDidMount() {
    const {
      navigation: { navigate },
      getDoggos
    } = this.props
    getDoggos()
    this.doggoSelectedSubscription = watchKitModuleEmitter
      .addListener("ItemSelected", ({ id }) => navigate("Detail", { id }))
    this.dataSubscription = watchKitModuleEmitter
      .addListener("GetInitialData", () => WatchKitModule.loadData(this.props.doggos))
  }

  componentWillReceiveProps(nextProps) {
    const { doggos } = nextProps
    WatchKitModule.loadData(doggos)
    this.setState(prevState => ({
      dataSource: prevState.dataSource.cloneWithRows(doggos)
    }))
  }

  componentWillUnmount() {
    this.doggoSelectedSubscription.remove()
    this.dataSubscription.remove()
  }

  foo = () => {
    this.props.loadMoreDogs()
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
  doggos: doggosSelector(state)
})

const mapDispatchToProps = {
  getDoggos: getDoggosAction,
  loadMoreDogs: loadMoreDogsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexView)
