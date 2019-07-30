import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <StaticQuery
    query={graphql`
      query ImageQuery {
        logo: file(relativePath: { eq: "sophie.png" }) {
          childImageSharp {
            fixed(height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <div class="row">
          <div class="col-sm-12">
            <Img fixed={data.logo.childImageSharp.fixed} />
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-sm-12">
            <h1>Sophie's Ride 2019</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <h4>
              The bi-annual pilgrimage to{" "}
              <a href="https://www.rainbows.co.uk">Rainbow's Hospice</a> will be
              on the 21st September 2019.
            </h4>
          </div>
        </div>
      </div>
    )}
  />
)
