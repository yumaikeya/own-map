import React from 'react'
import { Box, styled } from '@mui/system'
import { WHITE } from 'Constants/color'
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

const StyledImgWrapper = styled(Box)<{ height: number, width: number }>(({ height, width }) => ({
  background: WHITE,
  display: height > 0 ? 'flex' : 'none',
  alignItems: 'center',
  justifyContent: 'center',
  height,
  width
}))

const StyledImgBottom = styled(Box)<{ height: number, width: number }>(({ height, width }) => ({
  display: 'transparent',
  height: height / 7,
  width: width / 5
}))

const StyledImgTriangle = styled(Box)<{ height: number, width: number }>(({ height, width }) => ({
  position: 'absolute',
  bottom: - height / 10,
  right: width / 2.5,
  height: height / 7,
  width: width / 5,
  border: `${width / 10}px solid transparent`,
  borderTop: `${width / 10}px solid ${WHITE}`
}))

const Mar: React.FC<Props> = ({ src, name, latitude, longitude, width, height, onClick }) => {
  return (
    <Marker longitude={longitude} latitude={latitude} onClick={onClick} anchor='bottom' >
      <StyledImgWrapper width={width} height={height}>
        <img id={name} src={src} alt={src} style={{ width: '90%', height: '90%' }} />
      </StyledImgWrapper>
      <StyledImgBottom width={width} height={height} />
      <StyledImgTriangle width={width} height={height} />
    </Marker>
  )
}

export default Mar