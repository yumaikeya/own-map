import React from 'react'
import IconButton from '@mui/material/IconButton'

type Props = {
  src: 'string | undefined'
  color?: 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  style?: object
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const Button: React.FC<Props> = ({ src, color, onClick, style }) => {
  return (
    <IconButton
      color={color || 'primary'}
      onClick={onClick}
      sx={style}
    >
      <img src={src} alt='' />
    </IconButton>
  )
}

export default Button