export const TOGGLE_MAP_DETAIL = 'TOGGLE_MAP_DETAIL' as const
export const CHANGE_MAP_ZOOM = 'CHANGE_MAP_ZOOM' as const

export const toggleMapDetail = (isOpenDetail: boolean, id: string = '') => ({
  type: TOGGLE_MAP_DETAIL,
  isOpenDetail,
  id
})

export const changeZoom = (zoom: number) => ({
  type: CHANGE_MAP_ZOOM,
  zoom
})

export type actionType = ReturnType<typeof changeZoom | typeof toggleMapDetail>