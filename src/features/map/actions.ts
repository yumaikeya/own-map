export const CHANGE_MAP_ZOOM = 'CHANGE_MAP_ZOOM' as const

export const changeZoom = (zoom: number) => ({
  type: CHANGE_MAP_ZOOM,
  zoom
})

export type actionType = ReturnType<typeof changeZoom>