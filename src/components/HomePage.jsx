// ... (other imports)
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { GiSwan } from "react-icons/gi";
import { Card ,Stack,CardActionArea, Paper,CardContent,CardMedia} from "@mui/material";
import { Link } from "react-router-dom";



const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [selectedItem, setSelectedItem] = React.useState("Home");
  const handleNavItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "Home":
        return (

         

          <Stack direction="row" spacing={15}>
           
           <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="230"
          src="https://www.userful.com/hubfs/remote-worker-gif-1.gif"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
        <Link to="https://en.wikipedia.org/wiki/Human_resource_management" >
            <Button style={{fontSize:"20px",color:"black"}}>
            Hr Management
        </Button>
        </Link>
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Recruitment & selection, performance management, tracking employees, succession planning, and HR data and analytics are considered cornerstones of effective HRM.
          </Typography>
        </CardContent>
       
        </CardActionArea>
    </Card>
    
            
           <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="230"
       src="https://i.pinimg.com/originals/e3/52/6f/e3526f9d3757ec5610f24e25d4be4acc.gif"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            
            <Link to="https://en.wikipedia.org/wiki/Tracking_software" >
              <Button style={{fontSize:"20px",color:"black"}}>

              Employee Tracking
              </Button>
              </Link>
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
          By tracking employees' activities, HR can assess their productivity levels, identify any gaps in skills or training, and provide appropriate feedback and coaching to improve performance.

‍
          </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
            

           <Card sx={{ maxWidth: 375 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="230"
          src="https://media.tenor.com/qImqU1qNlUwAAAAC/to-do-list-to-do.gif"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            <Link to="https://en.wikipedia.org/wiki/Wikipedia:To-do_list">
            <Button style={{fontSize:"20px",color:"black"}}>
            To Do list
            </Button>
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          HR checklist can ensure the company complies with applicable laws, with all required forms and documentation completed and filed.
          </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
            
           <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="230"
          src="https://media0.giphy.com/media/ckaKTtBXT9QPiRrQwh/giphy.gif?cid=ecf05e47010rb498or6kkhx771nv83x10tpef2jw9lsq85su&ep=v1_gifs_search&rid=giphy.gif&ct=g"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            <Link to="https://en.wikipedia.org/wiki/Hiring">
              <Button style={{fontSize:"20px",color:"black"}}>

            Hiring
              </Button>
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Hiring process is the process of reviewing applications, selecting the right candidates to interview, testing candidates and performing various pre-employment tests and checks.
          </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
            

              
           </Stack>
            

          

        );
      case "About":
        return (
          
        
     
          <Stack direction="row" spacing={40}>
           
           <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          src="https://group.teamlease.com/wp-content/uploads/2021/09/2011-2015.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"24px",color:"black"}}>
      
            Company Past
       
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
          When the history of an organization comes up, it's usually in connection with an anniversary just part of the  investment of time and money would have little staying power.
          </Typography>
        </CardContent>
       
        </CardActionArea>
    </Card>
    
            
           <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
       src="https://www.pharmacyquality.com/wp-content/uploads/2020/12/achievements.jpg"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"24px",color:"black"}}>
            
           

              Company Achievements
              
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Historical milestones and a variety of achievements characterize our company’s journey: from a merchant’s company selling one product to the global player we are today.
‍
          </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
            

          
            
           <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          src="https://www.snapagency.com/wp-content/uploads/2022/12/iStock-1406742992-1024x590.jpg"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"24px",color:"black"}} >
            Company Future
          </Typography>
          <Typography variant="body2" color="text.secondary">
The future of your company is directly tied to the quality of the people that you can get, grow and keep on your team, which means that talent acquisition, talent development.</Typography>
        </CardContent>
        </CardActionArea>
    </Card>
            

              
           </Stack>

            

          
         
        );
      case "Contact":
        return (
          <Stack direction="row" spacing={30}>
           
           <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          src="https://cdn.create.vista.com/api/media/medium/17665009/stock-vector-phone-icon-button-red?token="
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"24px",color:"black"}}>
      
            Contact
       
            
          </Typography>
          <Typography variant="body2" color="text.secondary" >
          +1 (555) 123-4567
          </Typography>
        </CardContent>
       
        </CardActionArea>
    </Card>
    
            
           <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
       src="https://previews.123rf.com/images/newartgraphics/newartgraphics1403/newartgraphics140300048/26529586-red-round-button-with-mail-icon.jpg"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"24px",color:"black"}}>
            
           

              Email
              
            
          </Typography>
          <Typography variant="body2" color="text.secondary" >
              info‍@swam.com
          </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
            

          
            
           <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          src="https://as2.ftcdn.net/v2/jpg/03/88/31/11/1000_F_388311162_mr7l1NfICAfXG39KUcxFkpfqUAsnCNXp.jpg"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"24px",color:"black"}} >
            Location
          </Typography>
          <Typography variant="body2" color="text.secondary"  >
              123 Main street,Cityville,India.
</Typography>
        </CardContent>
        </CardActionArea>
    </Card>
            
            
           <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          src="https://as2.ftcdn.net/v2/jpg/03/98/52/43/1000_F_398524323_Hqx2DbnLY7taBdFnJtcHYsBImd1aNBNV.jpg"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize:"24px",color:"black"}} >
            Fax
          </Typography>
          <Typography variant="body2" color="text.secondary"  >
          1-222-512-1234
</Typography>
        </CardContent>
        </CardActionArea>
    </Card>
            

              
           </Stack>
        );
        }
      };
      
  const drawer = (
    <Box  sx={{ textAlign: "center" }}>

      
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                backgroundColor: selectedItem === item ? "#ccc" : "transparent",
              }}
              onClick={() => handleNavItemClick(item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{backgroundColor:"#ad1098"}}>
        <Toolbar>
         <GiSwan style={{fontSize:"40px",color:"black"}}></GiSwan>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          style={{color:"black"}}>
            Royal Swan
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff" }}
                onClick={() => handleNavItemClick(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer>
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <center>
          <Typography variant="h4" color="silver" fontFamily={"oswald"}>
            Welcome to Royal Swan
            <pre>

            </pre>
          </Typography>
          {renderContent()}
        </center>
      </Box>
    </Box>
    
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;