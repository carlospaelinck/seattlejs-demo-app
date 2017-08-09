import React from "react"
import {
  Text,
  Image,
  TouchableHighlight
} from "react-native"
import styled from "styled-components/native"
import { Images } from "../../modules/base-data"

export const StyledListView = styled.ListView`
  background: #fff;
  width: 100%;
`
const Avatar = styled.Image`
  border-radius: 25px;
  width: 50px;
  height: 50px;
`

const ListItem = styled.View`
  padding: 15px 15px 15px 0;
  margin-left: 15px;
  border: 0 solid #ccc;
  border-bottom-width: 1px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`

const ListItemInfo = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0 0 0 10px;
`

const Header = styled.Text`
  font-weight: 600;
  font-size: 18px;
`

export const TransactionsList = ({ dataSource, navigate }) => (
  <StyledListView
    dataSource={dataSource}
    renderRow={doggo => (
      <TouchableHighlight
        underlayColor="#eee"
        onPress={() => navigate("Detail", { id: doggo.id })}
      >
        <ListItem>
          <Avatar
            source={Images[doggo.picture]}
          />
          <ListItemInfo>
            <Header>
              { doggo.name }
            </Header>
            <Text>
              { doggo.breed }
            </Text>
          </ListItemInfo>
        </ListItem>
      </TouchableHighlight>
    )}
  />
)
