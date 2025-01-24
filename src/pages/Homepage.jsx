import React, { useState } from 'react'
import head2 from "../assets/images/head2.svg"
import logo from "../assets/images/logo.svg"

function Homepage() {
    return (
      <>
      <Box>
      </Box>
      <div>
        <img src={head2}/>
      </div>
      <div>
        <img class="flex flex-row " src={logo}/>
      </div>
      </>
    )
}

export default Homepage