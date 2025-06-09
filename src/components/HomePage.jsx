import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Card,
  Stack,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

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
                  height="200"
                  src="https://www.userful.com/hubfs/remote-worker-gif-1.gif"
                  alt="HR Management"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <Link to="https://en.wikipedia.org/wiki/Human_resource_management">
                      <Button style={{ fontSize: "20px", color: "black" }}>
                        Hr Management
                      </Button>
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Recruitment & selection, performance management, tracking
                    employees, succession planning, and HR data and analytics
                    are considered cornerstones of effective HRM.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  src="https://i.pinimg.com/originals/e3/52/6f/e3526f9d3757ec5610f24e25d4be4acc.gif"
                  alt="Employee Tracking"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <Link to="https://en.wikipedia.org/wiki/Tracking_software">
                      <Button style={{ fontSize: "20px", color: "black" }}>
                        Employee Tracking
                      </Button>
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    By tracking employees' activities, HR can assess their
                    productivity levels, identify any gaps in skills or
                    training, and provide appropriate feedback and coaching to
                    improve performance.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 375 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  src="https://media.tenor.com/qImqU1qNlUwAAAAC/to-do-list-to-do.gif"
                  alt="To Do List"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <Link to="https://en.wikipedia.org/wiki/Wikipedia:To-do_list">
                      <Button style={{ fontSize: "20px", color: "black" }}>
                        To Do list
                      </Button>
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    HR checklist can ensure the company complies with applicable
                    laws, with all required forms and documentation completed
                    and filed.
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
                  alt="Hiring"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <Link to="https://en.wikipedia.org/wiki/Hiring">
                      <Button style={{ fontSize: "20px", color: "black" }}>
                        Hiring
                      </Button>
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hiring process is the process of reviewing applications,
                    selecting the right candidates to interview, testing
                    candidates and performing various pre-employment tests and
                    checks.
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
                  alt="Company Past"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontSize: "24px", color: "black" }}
                  >
                    Company Past
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    When the history of an organization comes up, it's usually
                    in connection with an anniversary just part of the
                    investment of time and money would have little staying
                    power.
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
                  alt="Company Achievements"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontSize: "24px", color: "black" }}
                  >
                    Company Achievements
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Historical milestones and a variety of achievements
                    characterize our company's journey: from a merchant's
                    company selling one product to the global player we are
                    today.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Stack>
        );
      case "Contact":
        return (
          <div>
            <h1>Contact Us</h1>
            <p>Please reach out to us for any inquiries.</p>
          </div>
        );
      default:
        return (
          <div>
            <h1>Welcome to HR Management Portal</h1>
            <p>Please select a menu item to get started.</p>
          </div>
        );
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            HR Management Portal
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
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {renderContent()}
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
