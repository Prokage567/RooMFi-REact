import {
    Box, Button, TextField
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
import './login.css'
import IconButton from '@mui/material/IconButton';


function Login() {
    useEffect(() => {
        document.body.style.background = 'url(src/assets/images/background.svg)'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
        document.body.style.minHeight = '100vh'
        document.body.style.minWidth = '100vw'

    }, [])

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <>
            <ThemeProvider theme={theme}>

                <Box sx={{ alignItems: "center", display: "flex", flexWrap: "wrap", justifyContent: "center", minHeight: "100vh" }}>
                    <Box sx={{ width: "365px", backgroundColor: "rgb(36,47,91,0.75)", boxShadow: "black 1px 1px 5px" }}>
                        <Box sx={{ fontSize: "30px", textAlign: "center" }} >
                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                                <img src={logo} alt="Description of the image" height="55px" />
                                <Typography variant="h6" gutterBottom mt={4} sx={{
                                    fontFamily: "kronaOne", fontWeight: "200", fontSize: "35px", fontStyle: "", lineHeight: "80px", color: "#ED752B", paddingLeft: "5px"
                                }}>
                                    RooMFI
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ paddingBottom: "3vh", paddingLeft: "15px",paddingRight:"25px"}}>
                            <Typography sx={{ paddingLeft: "22px", color: "#D9D9D9" }}>
                                Username or Email Address:
                            </Typography>
                            <Box sx={{
                                display: "flex", paddingLeft: "10px", flexDirection: "column", alignItems: "center", justifyContent: "center", rowGap: "15px"
                            }}>
                                <TextField slotProps={{
                                    input: {
                                        sx: {
                                            width: "315px", '& .MuiInputBase-input': { background: "#D9D9D9", height: "7px", borderRadius: "5px 5px 5px 5px" }
                                        },
                                        disableUnderline: true,
                                    }
                                }} variant="filled" label="Enter Username/Email Address" color="primary" />
                            </Box>
                            <Typography sx={{ paddingLeft: "22px", color: "#D9D9D9",mt:"10px"}}>
                                Password:
                            </Typography>
                            <Box sx={{
                                display: "flex", paddingLeft: "10px", flexDirection: "column", alignItems: "center", justifyContent: "center", rowGap: "20px"
                            }}>
                                <TextField type={showPassword ? 'text' : 'password'} slotProps={{
                                    input: {
                                        sx: {
                                            width: "315px", '& .MuiInputBase-input': { background: "#D9D9D9", height: "7px", borderRadius: "5px 5px 5px 5px" }
                                        },
                                        disableUnderline: true,
                                        endAdornment: <InputAdornment>
                                            <IconButton
                                                aria-label={
                                                    showPassword ? 'hide the password' : 'display the password'
                                                }
                                                onClick={handleClickShowPassword}
                                            >{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton>
                                        </InputAdornment>
                                    }
                                }} variant="filled" label="Enter Password" />
                                <Typography color='#D9D9D9' style={{fontSize:"15px",fontFamily:"NiramitReg",paddingBottom: "5px" }}>
                                    Don't have an account yet?<Link to="https://www.google.com" style={{ textDecoration: "none", color: "#D9D9D9"}}> Register</Link>
                                </Typography>
                                <Button sx={{borderRadius:"10px 10px 10px 10px", background:"#000C3D",color:"white", width:"150px", fontFamily:"NiramitBold",}}>
                                    login 
                                    </Button>
                            </Box>
                        </Box>
                    </Box >
                </Box>
            </ThemeProvider>
        </>
    )
}

export default Login
