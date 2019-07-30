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
        <form action="/thanks/" name="rider" method="post" data-netlify="true">
          <input type="hidden" name="form-name" value="rider" />
          <div class="form-group">
            <label>
              Name:&nbsp;
              <input type="text" name="name" id="name" class="form-control" autoFocus />
            </label>
          </div>
          <div class="form-group">
            <label>
              Mobile #:&nbsp;
              <input type="mobile" name="mobile" id="mobile" class="form-control"/>
            </label>
          </div>
          <div class="form-group">
            <label>
              Number in Group:&nbsp;
              <input type="number" name="number" id="number" class="form-control"/>
            </label>
          </div>
          <button type="submit" class="btn btn-success">I'm In!</button>
        </form>
      </div>
    </div>
  </div>
)
