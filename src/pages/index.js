import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import RiderForm from '../components/RiderForm'
import Donations from "../components/Donations";

export const query = graphql`
  query {
    file(relativePath: { eq: "sophie.png" }) {
      childImageSharp {
        fixed (height: 250, width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default ({ data }) => (

<div class="container text-center">
    <Img fixed={data.file.childImageSharp.fixed}/>
    <h1>Sophie's Ride 2019</h1>
    <p>
      The bi-annual pilgrimage to <a href="https://www.rainbows.co.uk">Rainbow's Hospice</a> will be on the 21st September 2019.
    </p>
    <p>Please let us know if you're planning to attend.</p>
    <RiderForm></RiderForm>
    <hr></hr>
    <Donations></Donations>
    
    <h3>The Details</h3>
    <p>
      <h4>Start Address</h4>  
      <p><a href="https://goo.gl/maps/BVchVV3bCygJ8xb9A">The Little Car Park, Barton Marina, Barton Under Needwood, Burton On Trent, Staffs, DE13 8DZ</a></p>
      <h4>Time</h4>  
      <p>9am Sharp.</p>
    </p>
</div>)