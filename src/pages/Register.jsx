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
import { useEffect, useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import { Link, useNavigate } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import theme from '../../theme'
import logo from '../assets/images/logo.svg'
import './index.css'
import { AuthRegister } from '../api/auth'
import $ from 'jquery'
import Theme from '../components/CustomComponents'
import { toast } from 'react-toastify'
import withAuth from '../highOrdeerComponent/withAuth'


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

    const [warn, setwarn] = useState({})
    const [load, setload] = useState(false)
    const navigate = useNavigate()
    const register = () => {
        if (!load) {
            const name = $("#username").val()
            const email = $("#email").val()
            const first_name = $("#firstName").val()
            const last_name = $("#lastName").val()
            const password = $("#password").val()
            const password_confirmation = $("#PassConfirm").val()

            AuthRegister({ name, email, first_name, last_name, password, password_confirmation }).then(response => {
                if (response?.created) {
                    toast.success("success")
                    navigate('../login')
                }
                setwarn(response.errors)
            }).finally(() =>
                setload(false))
        }

    }
    const [showPassword, setShowPassword] = useState(false)

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
                                {warn?.name && (<div style={{fontSize:"15px", color:"red"}}>{warn.name}</div>)}
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
                                {warn?.email && (<div style={{fontSize:"15px", color:"red"}}>{warn.email}</div>)}
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
                                {warn?.first_name && (<div style={{fontSize:"15px", color:"red"}}>{warn.first_name}</div>)}
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
                                {warn?.last_name && (<div style={{fontSize:"15px", color:"red"}}>{warn.last_name}</div>)}
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
                                {warn?.password && (<div style={{fontSize:"15px", color:"red"}}>{warn.password}</div>)}
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
                                    {warn?.password_confirmation && (<div styles={{fontSize:"15px", color:"500"}}>{warn.password_confirmation}</div>)}                                
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

export default withAuth(Register)
