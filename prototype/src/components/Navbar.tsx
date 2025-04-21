import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Menu, MenuItem } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon, AccountCircle } from '@mui/icons-material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path: string) => {
    handleClose();
    navigate(path);
  };

  return (
    <AppBar position="sticky" sx={{ width: '100%', margin: 0, padding: 0 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
        >
          随便PT站点
        </Typography>

        <IconButton
          size="large"
          color="inherit"
          component={Link}
          to="/resources"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <SearchIcon />
        </IconButton>

        <IconButton
          size="large"
          color="inherit"
          component={Link}
          to="/notification"
        >
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <Button color="inherit" component={Link} to="/resources">资源</Button>
        <Button color="inherit" component={Link} to="/community">社区</Button>

        <IconButton
          size="large"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleMenuItemClick('/profile')}>个人中心</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/profile')}>我的下载</MenuItem>
          <MenuItem onClick={handleClose}>设置</MenuItem>
          <MenuItem onClick={handleClose}>退出</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;