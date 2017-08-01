import React, { Component } from "react"
import { connect } from "react-redux"
import { productsSelector } from "../../modules"
import {
  Text
} from "react-native"
import { FullView } from "../styled"

class DetailView extends Component {
  static navigationOptions = {
    title: "Product Detail"
  }

  constructor(props) {
    super(props)
    const {
      navigation: { state: { params: { id } } },
      products
    } = props
    this.state = {
      product: products.find(product => product.id === id)
    }
  }

  render() {
    const { product } = this.state
    return (
      <FullView>
        <Text>{ product.name }</Text>
      </FullView>
    )
  }
}

const mapStateToProps = state => ({
  products: productsSelector(state)
})

export default connect(mapStateToProps)(DetailView)
