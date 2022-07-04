import React from 'react'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import IconButton from 'Components/buttons/IconButton'
import closeIcon from 'Assets/icons/close.svg'

type Props = {
  id: string
  onClickClose: () => void
}

const AppbarHeight = 64

const Presenter: React.FC<Props> = ({ id, onClickClose }) => (
  <Drawer
    anchor='right'
    open={true}
    hideBackdrop={true}
    sx={{
      position: 'relative',
      zIndex: 0,
      '& .MuiDrawer-paper': { top: AppbarHeight, height: `calc(100vh - ${AppbarHeight}px)` }
    }}
  >
    <Box sx={{ width: 250, height: `calc(100vh - ${AppbarHeight}px)` }}>
      <Box>
        <IconButton
          onClick={onClickClose}
          src={closeIcon}
        />
      </Box>
      {id}
    </Box>
  </Drawer>
)

export default Presenter