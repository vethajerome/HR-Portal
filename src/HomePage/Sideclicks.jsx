import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ContactsIcon from '@mui/icons-material/Contacts';
import ArchiveRoundedIcon from '@mui/icons-material/ArchiveRounded';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import TodoList from './Todolist';
import Dummytable from './Dummytable';
import Dummytable2 from './Dummytable2';
import Name from '../components/Name';
import { userContext } from '../components/Context';
import { useContext } from 'react';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [user,setuser]=useContext(userContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarItemClick = (index) => {
    setSelectedItem(index);
  };

  const renderContent = () => { 
    
    switch (selectedItem) {
      
      case 0:
        return <Dummytable />;
      case 1:
        return <Dummytable2 />;
      case 2:
        return <TodoList />;
      case 3:
        return <div>NO TRASH AVAILABLE</div>;
      case 4:
        return <div>NO SPAM AVAILABLE</div>;
        default:
          return <div><i><Typography variant='h3'>Welcome <Name></Name> for a wonderful day</Typography></i></div>
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      
      <List sx={{ paddingTop: 2, paddingBottom: 2 }}>
        {['Employee details', 'Recruitment request', 'To Do List', 'Trash', 'Spam'].map((text, index) => {
          let icon;
          if (index === 0) {
            icon = <ContactsIcon />;
          } else if (index === 1) {
            icon = <ArchiveRoundedIcon />;
          } else if (index === 2) {
            icon = <ChecklistRtlRoundedIcon />;
          } else if (index === 3) {
            icon = <DeleteIcon />;
          } else if (index === 4) {
            icon = <GppMaybeIcon />;
          }

          return (
            

            <ListItem
              key={text}
              disablePadding
              sx={{ marginBottom: 5 }}
              selected={selectedItem === index}
              onClick={() => handleSidebarItemClick(index)}
              >
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
              
          );
        })}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      
      <CssBaseline />
      {/* navbar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        color='secondary'
      >
        <Toolbar>
          <IconButton
            color="purple"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        
        </Drawer>
        
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginLeft: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        {renderContent()}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
