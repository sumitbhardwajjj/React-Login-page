import { useState} from "react";
import "./App.css";




function App() {



  const initialValues = { username: "", email: "", Mobile: "", State:"",City:"",Pincode: "", Address:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
      
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.Mobile) {
      errors.Mobile = "Mobile number  is required";
    } else if (values.Mobile.length < 10 ) {
      errors.Mobile = "Mobile number cannot be less than 10 digits";
    }else if (values.Mobile.length > 10 ) {
      errors.Mobile = "Mobile number cannot exceed more than 10 digits";
    }
    if (!values.State) {
      errors.State = "State is required";
    } 
    
    if (!values.City) {
      errors.City = "City is required";
    } 
    if (!values.Pincode) {
      errors.Pincode = "Pincode is required";
    } 
    if (!values.Address) {
      errors.Address = "Address is required";
    } 
    return errors;
  };

  return (
    <div className="container">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}

      <form onSubmit={handleSubmit}>
        <h2>Personal Detail page</h2>
        <div className="ui-form">
          <div className="field">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
            <p>{formErrors.username}</p>
          </div>
          
          <div className="field">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
             <p>{formErrors.email}</p>
          </div>
         
          <div className="field">
            <label>Mobile:</label>
            <input
              type="tel"
              name="Mobile"
              placeholder="Mobile no"
              value={formValues.Mobile}
              onChange={handleChange}
            />
            <p>{formErrors.Mobile}</p>
          </div>
          <div className="field">
            <label>State:</label>
            <input
              type="text"
              name="State"            
              placeholder="State"
              value={formValues.State}
              onChange={handleChange}
            />
            <p>{formErrors.State}</p>
          </div>
          <div className="field">
            <label>City:</label>
            <input
              type="text"
              name="City"             
              placeholder="City"
              value={formValues.City}
              onChange={handleChange}
            />
            <p>{formErrors.City}</p>
          </div>
          <div className="field">
            <label>Pin Code:</label>
            <input
              type="tel" 
              name="Pincode"             
              placeholder="Pin Code"
              value={formValues.Pincode}
              onChange={handleChange}
            />
            <p>{formErrors.Pincode}</p>
          </div>
          <div className="field">
            <label>Address:</label>
            <input
              type="text"
              name="Address"
              placeholder="Address"
              value={formValues.Address}
              onChange={handleChange}
            />
            <p>{formErrors.Address}</p>
          </div>
        </div>
        <button className="fluid ui button blue">Save</button>
      </form>
    </div>
  );
}

export default App;