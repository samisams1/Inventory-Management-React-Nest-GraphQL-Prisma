import { Box, Button, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ME_QUERY } from "../../graphql/Profile";

const Topbar = () => {
  const navigate = useNavigate();
    const { loading, error, data } = useQuery(ME_QUERY)
  


  const theme = useTheme();
  //const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
      sx={{
        display:"flex",
       // backgroundColor={colors.primary[400]},
        borderRadius:"3px"
      }}
     
      >
<div>
 <Button><Link to="/admin">admin</Link></Button> 
 <Button><Link to="/nurse">nurse</Link></Button> 
 <Button><Link to="/cashier">cashier</Link></Button> 
 <Button><Link to="/doctor">doctor</Link></Button> 
 <Button><Link to="/patientAppointments">patientAppointments</Link></Button> 
 <Button><Link to="/patientVitals">patientVitals</Link></Button> 
 <Button><Link to="/checkup">checkup</Link></Button> 
 <Button><Link to="/profile">profile</Link></Button> 
 <Button><Link to="/patient">patient</Link></Button> 

</div>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;