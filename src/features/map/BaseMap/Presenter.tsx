import React from 'react'
import { Map, ViewStateChangeEvent } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

type Props = {
  children: React.ReactNode
  onMove: (event: ViewStateChangeEvent) => void
}

const initialViewState = {
  longitude: Number(process.env.REACT_APP_MAPBOX_INITIAL_LON),
  latitude: Number(process.env.REACT_APP_MAPBOX_INITIAL_LAT),
  zoom: Number(process.env.REACT_APP_MAPBOX_INITIAL_ZOOM),
  pitch: 60,
  bearing: 0
}

const Presenter: React.FC<Props> = ({ children, onMove }) => (
  <Map
    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    mapStyle={process.env.REACT_APP_MAPBOX_INITIAL_MAPSTYLE}
    initialViewState={initialViewState}
    onMove={onMove}
    style={{
      width: '100%',
      height: '100%'
    }}
  >
    {children}
  </Map >
)

export default Presenter