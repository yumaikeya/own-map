import { useSelector } from 'react-redux'
import bridge from 'Assets/mocks/bridge.jpg'
import blueBridge from 'Assets/mocks/blueBridge.jpg'
import bridgeSpec from 'Assets/mocks/spec.json'
import Presenter from './Presenter'

const Pic = () => {
  const { zoom } = useSelector((state: any) => state.map)

  return (
    <Presenter zoom={zoom} images={[bridge, blueBridge]} datas={bridgeSpec} />
  )
}

export default Pic