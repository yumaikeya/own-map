import produce from 'immer'
import { actionType, TOGGLE_MAP_DETAIL, CHANGE_MAP_ZOOM } from 'Features/map/actions'

export type MapReducerType = {
  id: string
  zoom: number
  isOpenDetail: boolean
}

const initState: MapReducerType = {
  id: '',
  zoom: 16,
  isOpenDetail: false
}

const map = (state = initState, action: actionType) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_MAP_DETAIL:
        draft.id = action.id
        draft.isOpenDetail = action.isOpenDetail
        break
      case CHANGE_MAP_ZOOM:
        draft.zoom = action.zoom
        break
      default:
        break
    }
  })

export default map