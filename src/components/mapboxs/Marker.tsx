import React from 'react'
import { Marker, MapboxEvent } from 'react-map-gl'

type Props = {
  src: string | undefined
  name: string
  latitude: number
  longitude: number
  width: number
  height: number
  onClick: (e: MapboxEvent<MouseEvent>) => void
}

const Mar: React.FC<Props> = ({ src, name, latitude, longitude, width, height, onClick }) => {
  return (
    <Marker longitude={longitude} latitude={latitude} onClick={onClick} anchor='bottom' >
      <img id={name} src={src} alt={src} style={{ width, height }} />
    </Marker>
  )
}

export default Mar