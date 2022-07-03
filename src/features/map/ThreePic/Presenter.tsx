import React from 'react'
import { MapboxEvent } from 'react-map-gl'
import Marker from 'Components/mapboxs/Marker'

type Props = {
  zoom: number | undefined
  images: string[]
  datas: {
    name: string
    latitude: number
    longitude: number
    width: number
    height: number
    rotation: number
    pitch: number
  }[]
  onClick: (e: MapboxEvent<MouseEvent>) => void
}

const Presenter: React.FC<Props> = ({ zoom, images, datas, onClick }) => (
  <>
    {
      images.map((pic, i) => <Marker
        key={pic}
        name={datas[i].name}
        longitude={datas[i].longitude}
        latitude={datas[i].latitude}
        width={zoom ? datas[i].width / 20 * (zoom - 16) : 0}
        height={zoom ? datas[i].height / 20 * (zoom - 16) : 0}
        src={pic}
        onClick={onClick}
      />)
    }
  </>
)

export default Presenter