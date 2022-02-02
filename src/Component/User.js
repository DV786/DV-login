import React from "react";

export default function User() {
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <label>
          <p>Name</p>
          <input type="text" placeholder="Name" />
        </label>
        <label>
          <p>E-mail</p>
          <input type="email" placeholder="E-mail" />
        </label>
        <label>
          <p>Mobile</p>
          <input type="number" placeholder="Mobile" />
        </label>
        <div className="radio-btn">
          <label>Gender:</label>
          <label>
            <input type="radio" />
            Male
          </label>
          <label>
            <input type="radio" />
            Female
          </label>
          <label>
            <input type="radio" />
            Other
          </label>
        </div>
        <div className="checkbox">
          <label>Hobby</label>
          <div className="Check_items">
            <label>
              <input type="checkbox" />
              Playing
            </label>
            <label>
              <input type="checkbox" />
              Playing
            </label>
            <label>
              <input type="checkbox" />
              Writing
            </label>
            <label>
              <input type="checkbox" />
              Singing
            </label>
            <label>
              <input type="checkbox" />
              Dancing
            </label>
          </div>
        </div>
        <div>
          <label>Country</label>
          <select name="country" id="country">
            <option>India</option>
            <option>Pakistan</option>
            <option>Sri-lanka</option>
            <option>Japan</option>
            <option>America</option>
          </select>
        </div>
        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
