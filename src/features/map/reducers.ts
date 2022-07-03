import produce from 'immer'
import { actionType, CHANGE_MAP_ZOOM } from 'Features/map/actions'

const initState = {
  zoom: 16
}

const map = (state = initState, action: actionType) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_MAP_ZOOM:
        draft.zoom = action.zoom
        break
      default:
        break
    }
  })

export default map