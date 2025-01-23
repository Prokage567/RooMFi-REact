import {
    Box,
    Button,
    FormControl,
    Input
} from '@mui/material'
import {
    Visibility
    , VisibilityOff
} from '@mui/icons-material'
import * as React from 'react'
import { useEffect } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import { Link, useNavigate } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import theme from '../../theme'
import logo from '../assets/images/logo.svg'
import './index.css'
import { DMLAuth } from '../api/auth'
import $ from 'jquery'
import Theme from '../components/CustomComponents'



const customStyle = {
    background: "#D9D9D9",
    width: "315px",
    borderRadius: "5px"
}
const customFonts = {
    color: "#D9D9D9",
    fontFamily: "NiramitReg",
    fontSize: "17px",
    paddingTop: "5px"
}

function Register() {
    useEffect(() => {
        Theme()
    }, [])
    const navigate = useNavigate()
    const register = () => {
        const name = $("#username").val()
        const email = $("#email").val()
        const first_name = $("#firstName").val()
        const last_name = $("#lastName").val()
        const password = $("#password").val()
        const password_confirmation = $("#PassConfirm").val()

        DMLAuth({ name, email, first_name, last_name, password, password_confirmation }, "POST").then(response => {

            if (response?.ok) {

            }
        })

    }
    const [showPassword, setShowPassword] = React.useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    return (
        <>
            <ThemeProvider theme={theme}>

                <Box sx={{
                    alignItems: "center",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    minHeight: "100vh"
                }}>
                    <Box sx={{
                        width: "365px",
                        backgroundColor: "rgb(36,47,91,0.75)"
                    }}>
                        <Box sx={{
                            fontSize: "30px",
                            textAlign: "center"
                        }} >
                            <Box sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                paddingBottom: "30px"
                            }} >
                                <img src={logo} alt="Description of the image" height="55px" />
                                <Typography variant="h6" gutterBottom mt={4} sx={{
                                    fontFamily: "KronaOne",
                                    fontWeight: "200",
                                    fontSize: "35px",
                                    lineHeight: "50px",
                                    color: "#ED752B",
                                    paddingLeft: "5px"
                                }}>
                                    RooMFI
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{
                            paddingBottom: "4vh",
                            paddingLeft: "25px",
                            paddingRight: "25px"
                        }}>
                            <form onSubmit={register}>

                                <Typography sx={{
                                    color: "#D9D9D9",
                                    fontFamily: "NiramitReg",
                                    fontSize: "17px"
                                }}>
                                    Username:
                                </Typography>
                                <FormControl sx={
                                    customStyle
                                } variant="filled">
                                    <Input id="username" sx={{
                                        paddingLeft: "10px"
                                    }} />
                                </FormControl>
                                <Typography sx={
                                    customFonts
                                }>
                                    Email Address:
                                </Typography>
                                <FormControl sx={
                                    customStyle
                                } variant="filled">
                                    <Input id="email" sx={{
                                        paddingLeft: "10px"
                                    }} />
                                </FormControl>
                                <Typography sx={
                                    customFonts
                                }>
                                    Firstname:
                                </Typography>
                                <FormControl sx={
                                    customStyle
                                } variant="filled">
                                    <Input id="firstName" sx={{
                                        paddingLeft: "10px"
                                    }} />
                                </FormControl>
                                <Typography sx={
                                    customFonts
                                }>
                                    Lastname:
                                </Typography>
                                <FormControl sx={
                                    customStyle
                                } variant="filled">
                                    <Input id="lastName" sx={{
                                        paddingLeft: "10px"
                                    }} />
                                </FormControl>
                                <Typography sx={
                                    customFonts
                                }>
                                    Password:
                                </Typography>
                                <FormControl sx={
                                    customStyle
                                } variant="filled">
                                    <Input id="password" type={showPassword ? 'text' : 'password'} sx={{ paddingLeft: "10px" }} endAdornment={
                                        <InputAdornment position="end">
                                            <Button onClick={handleClickShowPassword}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </Button>
                                        </InputAdornment>
                                    } />
                                </FormControl>
                                <Typography className="hello" sx={
                                    customFonts
                                }>
                                    Password Confirmation:
                                </Typography>
                                <FormControl sx={
                                    customStyle
                                } variant="filled">
                                    <Input id="PassConfirm" type={showPassword ? 'text' : 'password'} sx={{ paddingLeft: "10px" }} endAdornment={
                                        <InputAdornment position="end">
                                            <Button onClick={handleClickShowPassword}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </Button>
                                        </InputAdornment>
                                    } />
                                </FormControl>
                                <Typography color='#D9D9D9' style={{
                                    textAlign: "center",
                                    fontSize: "15px",
                                    fontFamily: "NiramitReg",
                                    paddingBottom: "25px",
                                    paddingTop: "25px"
                                }}>
                                    Already have an account?<Link to="../Login" style={{
                                        textDecoration: "none",
                                        color: "#D9D9D9"
                                    }}> back to Login</Link>
                                </Typography>
                                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>

                                    <Button onClick={register} sx={{
                                        borderRadius: "10px 10px 10px 10px",
                                        background: "#000C3D",
                                        color: "white",
                                        width: "250px",
                                        fontFamily: "NiramitReg"
                                    }}>
                                        Create Account
                                    </Button >
                                </Box>
                            </form>
                        </Box>
                    </Box>
                </Box >
            </ThemeProvider>
        </>
    )
}

export default Register
