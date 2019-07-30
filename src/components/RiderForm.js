import React from "react"

export default props => (
  <div>
    <div class="row">
      <div class="col-sm-12">
        <p>Please let us know if you're planning on joining us.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="form-group">
          <form action="/thanks" name="rider" method="post" data-netlify="true">
            <label>
              Name:&nbsp;
              <input type="text" name="name" id="name" autoFocus />
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
              Mobile #:&nbsp;
              <input type="mobile" name="mobile" id="mobile" />
            </label>
            <br />
            <br />
            <button type="submit">I'm In!</button>
          </form>
        </div>
      </div>
    </div>
  </div>
)
