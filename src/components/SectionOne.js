import React, { useState } from "react";
import SectionTwo from "./SectionTwo";
import "../App.css"

const SectionOne= () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    age:"",
    phone:"",
  });
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  const handleChange = (e) => {

    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputs", inputs);
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        name: "",
        email: "",
        age:"",
        phone:"",

      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: "",
        email: "",
        age:"",
        phone:"",
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({ name: tempData.name, email: tempData.email,age:tempData.age, phone:tempData.phone});
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <div className="container">
      <h1>User Form</h1>
      <div className="Top-section">
  
        <form onSubmit={handleSubmit}>
  
          <div>
            <label>Name</label>
            <input name="name" value={inputs.name} onChange={handleChange} />
          </div>
          <div>
            <label>Email</label>
            <input name="email" value={inputs.email} onChange={handleChange} />
          </div>
          <div>
            <label>Age</label>
            <input name="age" value={inputs.age} onChange={handleChange} />
          </div>
          <div>
            <label>phone</label>
            <input name="phone" value={inputs.phone} onChange={handleChange} />
          </div>
          
          <button type="submit">
            {editClick ? "update" : "Add"}
          </button>
        </form>
        <SectionTwo 
        name={inputs.name}
        email={inputs.email}
        age={inputs.age}
        phone={inputs.phone}
        
      />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
                <td>
                  <button
                    onClick={() => handleEdit(i)}> Edit</button>
                  
                  <button
                    onClick={() => handleDelete(i)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};


export default SectionOne