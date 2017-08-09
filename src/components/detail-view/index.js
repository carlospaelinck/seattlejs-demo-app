import React, { Component } from "react"
import { connect } from "react-redux"
import { doggosSelector } from "../../modules"
import { Images } from "../../modules/base-data"
import { FullView } from "../styled"
import styled from "styled-components/native"

const HeroImage = styled.Image`
  background: green;
  width: 100%;
  height: 250px;
`

const ContentView = styled.View`
  display: flex;
  padding: 15px;
  align-items: flex-start;
  justify-content: flex-start;
`

const Header = styled.Text`
  font-weight: 800;
  font-size: 30px;
`

const Breed = styled.Text`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 10px;
`

const Description = styled.Text`
  font-size: 15px;
  line-height: 22px;
`

class DetailView extends Component {
  static navigationOptions = {
    title: "Doggo!"
  }

  constructor(props) {
    super(props)
    const {
      navigation: { state: { params: { id } } },
      doggos
    } = props
    this.state = {
      doggo: doggos.find(doggo => doggo.id === id)
    }
  }


  render() {
    const { doggo } = this.state
    return (
      <FullView>
        <HeroImage
          source={Images[doggo.picture]}
        />
        <ContentView>
          <Header>{ doggo.name }</Header>
          <Breed>{ doggo.breed }</Breed>
          <Description>{ doggo.description }</Description>
        </ContentView>
      </FullView>
    )
  }
}

const mapStateToProps = state => ({
  doggos: doggosSelector(state)
})

export default connect(mapStateToProps)(DetailView)
