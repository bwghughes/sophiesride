import React from "react"
import SophieImg from "../data/images/sophie.png"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export const query = graphql`
  query {
    file(relativePath: { eq: "sophie.png" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ({ data }) => (
<div style={{ margin: `3rem auto`, maxWidth: 600, textAlign: 'center' }}>
    {/* <img src={SophieImg} alt="Sophie and Jane on a Bike"></img> */}
    <Img fluid={data.file.childImageSharp.fluid}/>
    <h1>Sophie's Ride 2019</h1>
    <p>
      The bi-annual pilgrimage to <a href="https://www.rainbows.co.uk">Rainbow's Hospice</a> will be on the 21st September 2019.
    </p>
    <p>Please let us know if you're planning to attend.</p>
    <form action="/thanks" name="rider" method="post" data-netlify="true">
      <label>
        Name:&nbsp;
        <input type="text" name="name" id="name" autoFocus/>
      </label>
      &nbsp;&nbsp;&nbsp;
      <label>
        Mobile #:&nbsp; 
        <input type="mobile" name="mobile" id="mobile" />
      </label>
      <br/>
      <br/>
      <button type="submit">I'm In!</button>
  </form>
    <hr></hr>
    <h3>Donations</h3>
    <p>
      Please give generously via JustGiving <a href="https://www.justgiving.com/fundraising/jane-rushton6">here</a>.
    </p>
    <hr></hr>
    <h3>The Details</h3>
    <p>
      <h4>Start Address</h4>  
      <p><a href="https://goo.gl/maps/BVchVV3bCygJ8xb9A">The Little Car Park, Barton Marina, Barton Under Needwood, Burton On Trent, Staffs, DE13 8DZ</a></p>
      <h4>Time</h4>  
      <p>9am Sharp.</p>

    </p>
  </div>)