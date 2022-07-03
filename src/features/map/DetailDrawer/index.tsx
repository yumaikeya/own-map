import { useSelector, useDispatch } from 'react-redux'
import { MapReducerType } from 'Features/map/reducers'
import { toggleMapDetail } from 'Features/map/actions'
import { RootState } from 'Provider'
import Presenter from './Presenter'

const Detail = () => {
  const dispatch = useDispatch()
  const { id, isOpenDetail } = useSelector<RootState, MapReducerType>(state => state.map)

  return (
    <>
      {isOpenDetail && <Presenter id={id} onClickClose={() => dispatch(toggleMapDetail(false))} />}
    </>
  )
}

export default Detail