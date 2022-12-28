import { Box,IconButton,useTheme } from "@mui/material";
import { useContext } from "react";
import  {ColorModeContext, tokens} from "../../theme";
import InputBase from "@mui/material/InputBase";
import { LightModeOutlined } from "@mui/icons-material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';import SettingsIcon from '@mui/icons-material/Settings';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Topbar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (<Box display="flex" justifyContent="space-between" p={2}>
    
    <Box 
    display = "flex"
    backgroundColor = { colors.black[400]}
    borderRadius = "3px"
    >
    <InputBase sx={{ ml: 2 ,flex: 1 }} placeholder= "Search" />
    <IconButton type="button" sx={{p:1}}>
            <SearchOutlinedIcon />
    </IconButton>
     </Box>

     {/* icon*/}

    <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode ==="dark" ?(
                <DarkModeIcon />
            ) : (
            <LightModeOutlined />
           )}
        </IconButton>
        <IconButton>
            <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton>
            <PersonOutlineOutlinedIcon />
        </IconButton>
        <IconButton>
            <SettingsIcon />
        </IconButton>
    </Box>
    </Box>
    );
};

export default Topbar;