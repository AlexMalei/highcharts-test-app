import React from 'react'
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  Typography,
  Menu,
  Box,
  MenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Routes } from 'constants/routes'
import { useNavigate } from 'react-router-dom'

const MENU_ROUTES = [{ route: Routes.carts, name: 'Carts' }]

export const Layout = ({ children }: React.PropsWithChildren<object>) => {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (route: string) => {
    setAnchorElNav(null)
    navigate(route)
  }

  return (
    <React.Fragment>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              <IconButton size='large' onClick={handleOpenNavMenu} color='inherit'>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={
                  {
                    //   display: { xs: 'block', md: 'none' },
                  }
                }
              >
                {MENU_ROUTES.map(page => (
                  <MenuItem key={page.name} onClick={() => handleCloseNavMenu(page.route)}>
                    <Typography textAlign='center'>{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </React.Fragment>
  )
}
