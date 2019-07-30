import React from "react"
import Banner from '../components/Banner'
import RiderForm from '../components/RiderForm'
import Donations from "../components/Donations";
import Details from "../components/Details";

export default ({ data }) => (
<div class="container text-center">
    <br></br>
    <Banner></Banner>
    <br></br>
    <hr></hr>
    <br></br>
    <RiderForm></RiderForm>
    <br></br>
    <hr></hr>
    <Donations></Donations>
    <br></br>
    <hr></hr>
    <Details></Details>
</div>
)