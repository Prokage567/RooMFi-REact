import {
    backdropClasses,
    Box, Button, FormControl, FormHelperText, Input, InputLabel, TextField
} from '@mui/material';
import {
    Visibility
    , VisibilityOff
} from '@mui/icons-material';
import * as React from 'react';
import { useEffect } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import theme from '../theme';
import logo from './assets/images/logo.svg'
import './index.css'

function Login() {
    useEffect(() => {
        document.body.style.background = 'url(src/assets/images/background.svg)'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
        document.body.style.Height = '80vh'
        document.body.style.minWidth = '90vw'

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
                                    fontFamily: "kronaOne", fontWeight: "200", fontSize: "35px", lineHeight: "50px", color: "#ED752B", paddingLeft: "5px"
                                }}>
                                    RooMFI
                                </Typography>
                            </Box>
                        </Box>

                        <Box className="hello" sx={{ paddingBottom: "4vh", paddingLeft: "25px", paddingRight: "25px" }}>
                            <Typography variat="overline" sx={{ color: "#D9D9D9", fontFamily: "NiramitReg", fontSize: "17px" }}>
                                Username:
                            </Typography>
                            <FormControl sx={{ background: "#D9D9D9", width: "315px", borderRadius: "5px" }} variant="filled">
                                <Input sx={{ paddingLeft: "10px" }}></Input>
                            </FormControl>
                            <Typography variat="overline" sx={{ color: "#D9D9D9", fontFamily: "NiramitReg", fontSize: "17px",paddingTop: "5px"  }}>
                                Emaild Address:
                            </Typography>
                            <FormControl sx={{ background: "#D9D9D9", width: "315px", borderRadius: "5px" }} variant="filled">
                                <Input sx={{ paddingLeft: "10px" }}></Input>
                            </FormControl>
                            <Typography variat="overline" sx={{ color: "#D9D9D9", fontFamily: "NiramitReg", fontSize: "17px",paddingTop: "5px" }}>
                                Firstname:
                            </Typography>
                            <FormControl sx={{ background: "#D9D9D9", width: "315px", borderRadius: "5px" }} variant="filled">
                                <Input sx={{ paddingLeft: "10px" }}></Input>
                            </FormControl>
                            <Typography variat="overline" sx={{ color: "#D9D9D9", fontFamily: "NiramitReg", fontSize: "17px" ,paddingTop: "5px"}}>
                                 Lastname:
                            </Typography>
                            <FormControl sx={{ background: "#D9D9D9", width: "315px", borderRadius: "5px" }} variant="filled">
                                <Input sx={{ paddingLeft: "10px" }}></Input>
                            </FormControl>
                            <Typography variat="overline" sx={{ color: "#D9D9D9", fontFamily: "NiramitReg", fontSize: "17px" ,paddingTop: "5px"}}>
                                Password:
                            </Typography>
                            <FormControl sx={{ background: "#D9D9D9", width: "315px", borderRadius: "5px", }} variant="filled">
                            <Input  type={showPassword ? 'text' : 'password'} sx={{ paddingLeft: "10px" }} endAdornment={ 
                                    <InputAdornment position="end">
                                    <Button onClick={handleClickShowPassword}>                  
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </Button>
                                    </InputAdornment>
                                }></Input>
                            </FormControl>
                            <Typography className="hello" variat="overline" sx={{ color: "#D9D9D9", fontFamily: "NiramitReg", fontSize: "17px", paddingTop: "5px" }}>
                                Password Confirmation:
                            </Typography>
                            <FormControl sx={{ background: "#D9D9D9", width: "315px", borderRadius: "5px" }} variant="filled">
                            <Input  type={showPassword ? 'text' : 'password'} sx={{ paddingLeft: "10px" }} endAdornment={ 
                                    <InputAdornment position="end">
                                    <Button onClick={handleClickShowPassword}>                  
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </Button>    
                                    </InputAdornment>
                                }></Input>
                            </FormControl>
                            <Typography color='#D9D9D9' style={{ textAlign: "center", fontSize: "10px", fontFamily: "kronaOne", paddingBottom: "25px", paddingTop: "25px" }}>
                                Already have an account?<Link to="../Login" style={{ textDecoration: "none", color: "#D9D9D9" }}> back to Login</Link>
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
