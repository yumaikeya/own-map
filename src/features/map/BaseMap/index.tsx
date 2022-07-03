import React from 'react'
import { changeZoom } from 'Features/map/actions'
import { useDispatch } from 'react-redux'
import { ViewStateChangeEvent } from 'react-map-gl'
import Presenter from './Presenter'

type Props = {
  children: React.ReactNode
}

const BaseMap: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch()
  const handleViewState = ({ viewState }: ViewStateChangeEvent) => {
    dispatch(changeZoom(viewState.zoom))
  }
  return <Presenter onMove={handleViewState}>{children}</Presenter>
}

export default BaseMap