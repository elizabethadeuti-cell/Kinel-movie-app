import React, { useState } from "react";
function Login() {

    return (
      
   <form className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl space-y-4">

  <h2 className="text-2xl font-bold text-center">Signup</h2>

  {/* Name */}
  <input
    type="text"
    name="name"
    placeholder="Name"
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  {/* Email */}
  <input
    type="email"
    name="email"
    placeholder="Email"
    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  {/* Country Dropdown */}
  <select
    name="country"
    className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <option value="">Select country</option>
    <option>Nigeria</option>
    <option>Ghana</option>
    <option>Canada</option>
  </select>

  {/* Checkbox */}
  <div className="flex items-center space-x-2">
    <input type="checkbox" className="w-4 h-4" />
    <label className="text-sm">I agree to terms</label>
  </div>

  {/* Radio buttons */}
  <div>
    <p className="mb-1 text-sm font-medium">Gender</p>
    <div className="flex gap-4">
      <label className="flex items-center gap-2">
        <input type="radio" name="gender" className="w-4 h-4" />
        Male
      </label>

      <label className="flex items-center gap-2">
        <input type="radio" name="gender" className="w-4 h-4" />
        Female
      </label>
    </div>
  </div>

  {/* Button */}
  <button
    type="submit"
    className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
  >
    Submit
  </button>

</form>
    );
}




export default Login;