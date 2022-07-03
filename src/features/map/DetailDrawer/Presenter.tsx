import React from 'react'
import Drawer from "@mui/material/Drawer"
import Box from "@mui/material/Box"

type Props = {
  id: string
  onClickClose: () => void
}

const AppbarHeight = 64

const Presenter: React.FC<Props> = ({ id, onClickClose }) => (
  <Drawer
    anchor='right'
    open={true}
    onClose={onClickClose}
    sx={{ '& .MuiDrawer-paper': { top: AppbarHeight, height: `calc(100vh - ${AppbarHeight}px)` } }}
  >
    <Box sx={{ width: 250, height: `calc(100vh - ${AppbarHeight}px)` }}>
      {id}
    </Box>
  </Drawer>
)

export default Presenter