import {
    Box, Button, FormControl, Input
} from "@mui/material";
import {
    Visibility
    , VisibilityOff
} from "@mui/icons-material";
import * as React from "react";
import { useEffect, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import logo from "../assets/images/logo.svg"
import Theme from "../components/CustomComponents";
import "./App.css"
import { useCookies } from "react-cookie"
import { AuthLogin } from "../api/auth";
import $ from "jquery"
import { toast } from "react-toastify"
import withoutAuth from "../highOrdeerComponent/withoutAuth";
import { AuthContext } from "../context/context";

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

function Login() {

    const { login } = React.useContext(AuthContext)
    const [cookies, setCookie, removeCookie] = useCookies()
    useEffect(() => {
        Theme()
    }, [])
    const navigate = useNavigate()
    const [warn, setwarn] = useState({})
    const [load, setload] = useState(false)
    const login1 = () => {
        if (!load) {
            setload(true)
            const name = $("#nameEmail").val()
            const password = $("#current-password").val()
            AuthLogin({ name, password }).then(response => {
                if (response?.Authenticated) {
                    toast.success("successfully logged in!")
                    setCookie("token", response?.token)
                    login([response.data])
                    navigate("./homepage")
                }
                setwarn(response.errors)
            }).finally(() =>
                setload(false))
        }
    }

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

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
                                    fontFamily: "kronaOne",
                                    fontWeight: "200",
                                    fontSize: "35px",
                                    lineHeight: "80px",
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
                            <form >
                                <Typography variat="overline" sx={customFonts}>
                                    Username or Emaild Address:
                                </Typography>

                                <FormControl sx={customStyle} variant="filled">
                                    <Input id="nameEmail" sx={{
                                        paddingLeft: "10px",
                                       
                                    }}></Input>
                                </FormControl>
                                {warn?.name && (<div style={{ fontSize: "15px", color: "red" }}>{warn.name}</div>)}

                                <Typography variat="overline" sx={customFonts}>
                                    Password:
                                </Typography>

                                <FormControl sx={customStyle} variant="filled">
                                    <Input autoComplete="off" id="current-password" type={showPassword ? "text" : "password"} sx={{ paddingLeft: "10px" }} endAdornment={
                                        <InputAdornment position="end">
                                            <Button onClick={handleClickShowPassword}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </Button>
                                        </InputAdornment>
                                    }></Input>
                                </FormControl>
                                {warn?.password && (<div style={{ fontSize: "15px", color: "red" }}>{warn.password}</div>)}


                                <Typography color="#D9D9D9" style={{
                                    textAlign: "center",
                                    fontSize: "16px",
                                    fontFamily: "NiramitReg",
                                    paddingBottom: "25px",
                                    paddingTop: "25px"
                                }}>
                                </Typography>
                                    <div className="text-[#fff] ml-6 mb-8  ">
                                        <div>
                                            Don"t have an account yet?<Link to="../Register" > <div className="z-10 absolute  bottom-[160px] ml-[200px] hover:underline">Register</div> </Link>
                                        </div>
                                    </div>

                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexDirection: "column"
                                }}>

                                    <Button onClick={login1} disabled={load} sx={{
                                        borderRadius: "10px 10px 10px 10px",
                                        background: "#000C3D",
                                        color: "white",
                                        width: "150px",
                                        fontFamily: "NiramitReg",
                                
                                    }}>
                                        login
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                </Box >
            </ThemeProvider>
        </>
    )
}

export default withoutAuth(Login)
