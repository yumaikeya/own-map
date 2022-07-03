import React from 'react'
import { Marker } from 'react-map-gl'

type Props = {
  src: string | undefined
  latitude: number
  longitude: number
  width: number
  height: number
}

const Mar: React.FC<Props> = ({ src, latitude, longitude, width, height }) => {
  return (
    <Marker longitude={longitude} latitude={latitude} pitchAlignment={'viewport'} rotationAlignment={'viewport'} anchor='bottom' >
      <img src={src} style={{ width, height }} />
    </Marker>
  )
}

export default Mar