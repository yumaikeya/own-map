import React from 'react'
import Marker from 'Components/mapboxs/Marker'

type Props = {
  zoom: number | undefined
  images: string[]
  datas: any[]
}

const Presenter: React.FC<Props> = ({ zoom, images, datas }) => (
  <>
    {
      images.map((pic, i) => <Marker
        key={pic}
        longitude={datas[i].longitude}
        latitude={datas[i].latitude}
        width={zoom ? datas[i].width / 30 * (zoom - 16) : 0}
        height={zoom ? datas[i].height / 30 * (zoom - 16) : 0}
        src={pic}
      />)
    }
  </>
)

export default Presenter