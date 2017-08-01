import React from "react"
import {
  Text,
  TouchableOpacity
} from "react-native"
import styled from "styled-components/native"

export const StyledListView = styled.ListView`
  width: 100%;
`

export const TransactionsList = ({ dataSource, navigate }) => (
  <StyledListView
    dataSource={dataSource}
    renderRow={data => (
      <TouchableOpacity
        onPress={() => navigate("Detail", { id: data.id })}
      >
        <Text>
          { data.name }&nbsp;&mdash;&nbsp;${ data.price }
        </Text>
      </TouchableOpacity>
    )}
  />
)
