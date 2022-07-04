import React, { useState } from 'react'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import menuIcon from 'Assets/icons/menu.svg'
import closeMenuIcon from 'Assets/icons/menuClose.svg'
import flightIcon from 'Assets/icons/flight.svg'
import IconButton from 'Components/buttons/IconButton'
import IconItemList from 'Components/lists/IconItemList'

const drawerWidth = 200
const AppbarHeight = 64
const contents = ['Map']

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden'
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} - 5px)`,
  }
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const DrawerRightHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  [theme.breakpoints.up('sm')]: {
    minHeight: `${AppbarHeight}px`
  }
}))

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  height: `${AppbarHeight}px`,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,

  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'content-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    })
  })
)

type Props = {
  children: React.ReactNode
}

const LeftDrawer: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <IconButton
            onClick={() => setOpen(true)}
            style={{
              display: open && 'none'
            }}
            src={menuIcon}
          />
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton
            onClick={() => setOpen(false)}
            style={{
              display: !open && 'none'
            }}
            src={closeMenuIcon}
          />
        </DrawerHeader>
        <Divider />
        <List>
          {contents.map(content => <IconItemList
            key={content}
            src={flightIcon}
            text={content}
            open={open}
          />
          )}
        </List>
      </Drawer>
      <Box component='main' sx={{ flexGrow: 2, p: 0, m: 0, height: `calc(100vh - ${AppbarHeight}px)` }}>
        <DrawerRightHeader />
        {children}
      </Box>
    </Box>
  )
}

export default LeftDrawer