import { createTheme } from "@mui/material";

const themeOptions = createTheme({
    palette: {
        primary: {
            main: "#11172E"
        },
        success: {
            main: "#4CE44C"
        },
        secondary: {
            main: "#ccff00"
        },
        error: {
            main: "#242F5B"
        }
    },
    components: {
        MuiTextField:{
            stylesOverrides:{
                root:{
                    background:"black"
                }
            }
        }
    }
})
export default themeOptions