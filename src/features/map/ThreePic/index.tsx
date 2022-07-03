import { useSelector, useDispatch } from 'react-redux'
import { MapReducerType } from 'Features/map/reducers'
import { RootState } from 'Provider'
// import { MapboxEvent } from 'react-map-gl'
import { toggleMapDetail } from 'Features/map/actions'
import bridge from 'Assets/mocks/bridge.jpg'
import blueBridge from 'Assets/mocks/blueBridge.jpg'
import flower from 'Assets/mocks/flower.jpg'
import bridgeSpec from 'Assets/mocks/specs.json'
import Presenter from './Presenter'

const Pic = () => {
  const dispatch = useDispatch()
  const { zoom } = useSelector<RootState, MapReducerType>(state => state.map)

  const handleClick = ({ originalEvent: { target } }: any) => {
    dispatch(toggleMapDetail(true, target?.id))
  }

  return (
    <Presenter zoom={zoom} images={[bridge, blueBridge, flower]} datas={bridgeSpec} onClick={handleClick} />
  )
}

export default Pic