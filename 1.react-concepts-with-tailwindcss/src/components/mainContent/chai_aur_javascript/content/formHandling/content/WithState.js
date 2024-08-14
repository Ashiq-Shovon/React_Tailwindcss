import React, { useState } from "react";

const obj = {
  firstName: "",
  lastName: "",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  email: "",
  phoneNumber: "",
  isUser: null,
};

const WithState = () => {
  const [data, BioData] = useState(obj);
  const handleSubmit = () => {};

  const inputChange = (e) => {};

  return (
    <>
      <h1 className="text-2xl uppercase text-center mt-5 mb-3">Form Data</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-6 justify-center "
      >
        <div className="grid grid-cols-2 gap-1 mb-2">
          <label>First Name</label>
          <input type="text" className="px-5 py-3" />
        </div>
        <div className="grid grid-cols-2 gap-1">
          <label>Last Name</label>
          <input type="text" className="px-5 py-3" />
        </div>
        <div className="grid grid-cols-2 gap-1 mb-2">
          <label>Email</label>
          <input type="email" className="px-5 py-3" />
        </div>
        <div className="grid grid-cols-2 gap-1 mb-2">
          <input type="checkbox" name="check" value="origin" checked /> <br />
          <p>Choose Your Radio Button</p><br />
          <input type="radio" name="val" value="value 1" />
          <input type="radio" name="val" value="value 2" />
          <input type="radio" name="val" value="value 3" />
          <input type="radio" name="val" value="value 4" />
        </div>
        <div className="grid grid-cols-2 gap-1 mb-2">
          <fieldset>choose your Division</fieldset>
          <select>
            <option>choose...</option>
            <option>Dhaka</option>
            <option>Rajshahi</option>
            <option>Khulna</option>
            <option>Barishal</option>
            <option>Sylhet</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default WithState;
