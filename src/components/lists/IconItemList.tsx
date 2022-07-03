import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

type Props = {
  src: string | undefined
  text: string
  open?: boolean
}

const Itm: React.FC<Props> = ({ src, text, open = true }) => {
  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 2 : 'auto',
            justifyContent: 'center'
          }}
        >
          <img src={src} alt={src} />
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  )
}

export default Itm