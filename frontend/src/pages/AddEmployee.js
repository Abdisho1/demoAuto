import React, { useState } from 'react';

function AddEmployee(props) {

    //Declare state variables for form fields
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    // Function to handle form submission
    async function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior
    
        const formData = {
            first_name: firstName,
            last_name: lastName,
            email: emailAddress,
            password: password
        };
    
        const apiUrl = 'http://13.217.59.165:4550/add-employee';
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        };
    
        try {
            const response = await fetch(apiUrl, requestOptions);
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error during fetch:', error);
        }
    }
    


  return (
    <div>
        <h1>Add Employee</h1>
        <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First name</label><br/>
                <input type="text" id="fname" name="fname" value={firstName} onChange={event => setFirstName(event.target.value)} required /><br/>
                <label htmlFor="lname">Last name</label><br/>
                <input type="text" id="lname" name="lname" value={lastName} onChange={event => setLastName(event.target.value)} required /><br/>
                <label htmlFor="email">Email</label><br/>
                <input type="email" id="email" name="email" value={emailAddress} onChange={event => setEmailAddress(event.target.value)} required /><br/>
                <label htmlFor="password">Password</label><br/>
                <input type="password" id="password" name="password" value={password} onChange={event => setPassword(event.target.value)} required /><br/>
                <input type="submit" value="Add Employee" />
        </form>
    </div>
  );
}

export default AddEmployee;