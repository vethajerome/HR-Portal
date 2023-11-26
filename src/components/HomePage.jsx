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
<center>
          <div className="home">

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
            

           <Card sx={{ maxWidth: 345 }}>
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
            

          </div>
</center>
        );
      case "About":
        return (
          <div className="about">
            {" "}
            <Typography variant="h4" gutterBottom>
              <br></br>
              <br></br>
              <br></br>
              About Us
            </Typography>
            <Typography variant="body1" paragraph className="body1">
              Royal Swan is a leading technology company dedicated to providing
              innovative solutions to our clients. With a team of experienced
              professionals, we strive to deliver excellence in every project we
              undertake.Hope we will achieve our milestones.
            </Typography>
            <Typography variant="body1" paragraph>
              Our Approach:
              <ul className="about-list">
                <li>Client-Centric Solutions</li>
                <li>Continuous Innovation</li>
                <li>Commitment to Quality</li>
                <li>Team Collaboration</li>
              </ul>
            </Typography>
            <Typography variant="body1" paragraph>
              Whether you're looking for cutting-edge technology services or
              strategic consulting, Swan is your trusted partner for success.
            </Typography>


            
          </div>
        );
      case "Contact":
        return (
          <div className="about">
            {" "}
            <Typography variant="h4" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body1" paragraph className="body1">
              At Swan Company, our unwavering commitment to our employees goes
              beyond the conventional boundaries of employer-employee
              relationships. We pride ourselves on fostering a workplace culture
              that prioritizes the well-being and success of our team members.
              We'd love to hear from you.Contact us through the following
            </Typography>
            <Typography variant="body1" paragraph>
              Email:info@swan.com.
            </Typography>
            <Typography variant="body1" paragraph>
              Phone:+1 (555) 123-4567
            </Typography>
            <Typography variant="body1" paragraph>
              Address:123 Main street,Cityville,India.
            </Typography>
          </div>
        
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