import React from "react"
import { Text } from "react-native"
import styled from "styled-components/native"

export const StyledListView = styled.ListView`
  width: 100%;
`

export const TransactionsList = ({ dataSource }) => (
  <StyledListView
    dataSource={dataSource}
    renderRow={data => (
      <Text>{ data.name }&nbsp;&mdash;&nbsp;${ data.price }</Text>
    )}
  />
)
