import {
    backdropClasses,
    Box, Button, FormControl, FormHelperText, Input, InputLabel, TextField
} from '@mui/material';
import {
    AccountCircle,
    Visibility
    , VisibilityOff
} from '@mui/icons-material';
import * as React from 'react';
import { useEffect } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';
import logo from '../assets/images/logo.svg'
import './index.css'
import Theme from '../components/CustomComponents';


function Login() {
    useEffect(() => {
        Theme()
    }, [])

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    

    return (
        <>
        
            <ThemeProvider theme={theme}>

                <Box sx={{ alignItems: "center", display: "flex", flexWrap: "wrap", justifyContent: "center", minHeight: "100vh" }}>
                    <Box sx={{ width: "365px", backgroundColor: "rgb(36,47,91,0.75)" }}>
                        <Box sx={{ fontSize: "30px", textAlign: "center" }} >
                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: "30px" }} >
                                <img src={logo} alt="Description of the image" height="55px" />
                                <Typography variant="h6" gutterBottom mt={4} sx={{
                                    fontFamily: "kronaOne", fontWeight: "200", fontSize: "35px", fontStyle: "", lineHeight: "80px", color: "#ED752B", paddingLeft: "5px"
                                }}>
                                    RooMFI
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ paddingBottom: "4vh", paddingLeft: "25px", paddingRight: "25px" }}>
                            <Typography variat="overline" sx={{ color: "#D9D9D9", fontFamily: "kronaOne", fontSize: "12px" }}>
                                Username or Emaild Address:
                            </Typography>

                            <FormControl sx={{ background: "#D9D9D9", width: "315px", borderRadius: "5px" }} variant="filled">
                                <Input id="username"sx={{ paddingLeft: "10px" }}></Input>
                            </FormControl>

                            <Typography variat="overline" sx={{ color: "#D9D9D9", fontFamily: "kronaOne", fontSize: "12px", paddingTop: "25px" }}>
                                Password:
                            </Typography>

                            <FormControl sx={{ background: "#D9D9D9", width: "315px", borderRadius: "5px" }} variant="filled">
                                <Input id="password" type={showPassword ? 'text' : 'password'} sx={{ paddingLeft: "10px" }} endAdornment={ 
                                    <InputAdornment position="end">
                                    <Button onClick={handleClickShowPassword}>                  
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </Button>    
                                      
                                    </InputAdornment>
                                }></Input>
                            </FormControl>
                            <Typography color='#D9D9D9' style={{ textAlign: "center", fontSize: "10px", fontFamily: "kronaOne", paddingBottom: "25px", paddingTop: "25px" }}>
                                Don't have an account yet?<Link to="../pages/Register" style={{ textDecoration: "none", color: "#D9D9D9" }}> Register</Link>
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>

                                <Button sx={{ borderRadius: "10px 10px 10px 10px", background: "#000C3D" , color: "white", width: "150px", fontFamily: "kronaOne" }}>
                                    login
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box >
            </ThemeProvider>
        </>
    )
}

export default Login
