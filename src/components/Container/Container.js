import React from 'react'
import * as S from "./Container.styles"

const Container = ({ children }) => {
  return (
    <S.ContainerContent>{children}</S.ContainerContent>
  )
}

export default Container