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
import { Card ,Stack,CardActionArea} from "@mui/material";


const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [selectedItem, setSelectedItem] = React.useState("");
  const handleNavItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "Home":
        return (
          <div className="home">
            

            <Typography variant="h4" gutterBottom>
              Home
            </Typography>
            <Typography variant="body1" paragraph className="body1">
              At Royal Swan, we are dedicated to delivering high-quality
              solutions that meet the unique needs of our clients. Our
              commitment to excellence drives us to provide innovative and
              reliable services across various industries.Our company will be very engaged with your ideas.
            </Typography>
            <Typography variant="body1" paragraph>
              Our Services include:
              <ul className="services-list">
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>Design and Branding</li>
                <li>Consulting Services</li>
              </ul>
            </Typography>
            <Typography variant="body1" paragraph>
              Whether you are a startup looking to establish your online
              presence, an established business seeking to enhance your digital
              strategy, or anything in between, Swan is here to support you.
            </Typography>
            
          </div>
        );
      case "About":
        return (
          <div className="about">
            {" "}
            <Typography variant="h4" gutterBottom>
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
        default:
          return (
           <Stack direction="row" spacing={40}>
              <CardActionArea>
            <Card className="hello">

              hello
            </Card>
              </CardActionArea>
              <CardActionArea>

            <Card style={{width:"300px",height:"300px"}}>
              hello
            </Card>
              </CardActionArea>
              <CardActionArea>

            <Card style={{width:"300px",height:"300px"}}>
              hello
            </Card>
              </CardActionArea>
         

           </Stack>
          )
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
          <Typography variant="h4" color="silver">
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