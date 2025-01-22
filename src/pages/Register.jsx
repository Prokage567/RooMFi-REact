import {
    Box,
    Button,
    FormControl,
    FormHelperText,
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
import { Link } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import theme from '../../theme'
import logo from '../assets/images/logo.svg'
import './index.css'
import { DMLAuth } from '../api/auth'
import { toast } from 'react-toastify'
import $ from 'jquery'
import Theme from '../components/CustomComponents'

function Register() {
    useEffect(() => {
        Theme()
    }, [])

    const register = () => {
        const username = $("#username").val()
        const email = $("#email").val()
        const firstName = $("#firstName").val()
        const lastName = $("#lastName").val()
        const password = $("#password").val()
        const PassConfirm = $("#PassConfirm").val()

        DMLAuth({ name: username, email: email, first_name: firstName, last_name: lastName, password: password, password_confirmation: PassConfirm }, "POST")
            .then(response => {
                console.log(register)
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

                        <Box onClick={() => register} sx={{
                            paddingBottom: "4vh",
                            paddingLeft: "25px",
                            paddingRight: "25px"
                        }}>
                            <Typography sx={{
                                color: "#D9D9D9",
                                fontFamily: "NiramitReg",
                                fontSize: "17px"
                            }}>
                                Username:
                            </Typography>
                            <FormControl sx={{
                                background: "#D9D9D9",
                                width: "315px",
                                borderRadius: "5px"
                            }} variant="filled">
                                <Input id="username" sx={{
                                    paddingLeft: "10px"
                                }} />
                            </FormControl>
                            <Typography sx={{
                                color: "#D9D9D9",
                                fontFamily: "NiramitReg",
                                fontSize: "17px",
                                paddingTop: "5px"
                            }}>
                                Email Address:
                            </Typography>
                            <FormControl sx={{
                                background: "#D9D9D9",
                                width: "315px",
                                borderRadius: "5px"
                            }} variant="filled">
                                <Input id="email" sx={{
                                    paddingLeft: "10px"
                                }} />
                            </FormControl>
                            <Typography sx={{
                                color: "#D9D9D9",
                                fontFamily: "NiramitReg",
                                fontSize: "17px",
                                paddingTop: "5px"
                            }}>
                                Firstname:
                            </Typography>
                            <FormControl sx={{
                                background: "#D9D9D9",
                                width: "315px",
                                borderRadius: "5px"
                            }} variant="filled">
                                <Input id="firstName" sx={{
                                    paddingLeft: "10px"
                                }} />
                            </FormControl>
                            <Typography sx={{
                                color: "#D9D9D9",
                                fontFamily: "NiramitReg",
                                fontSize: "17px",
                                paddingTop: "5px"
                            }}>
                                Lastname:
                            </Typography>
                            <FormControl sx={{
                                background: "#D9D9D9",
                                width: "315px",
                                borderRadius: "5px"
                            }} variant="filled">
                                <Input id="lastName" sx={{
                                    paddingLeft: "10px"
                                }} />
                            </FormControl>
                            <Typography sx={{
                                color: "#D9D9D9",
                                fontFamily: "NiramitReg",
                                fontSize: "17px",
                                paddingTop: "5px"
                            }}>
                                Password:
                            </Typography>
                            <FormControl sx={{
                                background: "#D9D9D9",
                                width: "315px",
                                borderRadius: "5px",
                            }} variant="filled">
                                <Input id="password" type={showPassword ? 'text' : 'password'} sx={{ paddingLeft: "10px" }} endAdornment={
                                    <InputAdornment position="end">
                                        <Button onClick={handleClickShowPassword}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </Button>
                                    </InputAdornment>
                                } />
                            </FormControl>
                            <Typography className="hello" sx={{
                                color: "#D9D9D9",
                                fontFamily: "NiramitReg",
                                fontSize: "17px",
                                paddingTop: "5px"
                            }}>
                                Password Confirmation:
                            </Typography>
                            <FormControl sx={{
                                background: "#D9D9D9",
                                width: "315px",
                                borderRadius: "5px"
                            }} variant="filled">
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
                                Already have an account?<Link to="../pages/Login" style={{
                                    textDecoration: "none",
                                    color: "#D9D9D9"
                                }}> back to Login</Link>
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>

                                <Button  sx={{
                                    borderRadius: "10px 10px 10px 10px",
                                    background: "#000C3D",
                                    color: "white",
                                    width: "250px",
                                    fontFamily: "NiramitReg"
                                }}>
                                    Create Account
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box >
            </ThemeProvider>
        </>
    )
}

export default Register
