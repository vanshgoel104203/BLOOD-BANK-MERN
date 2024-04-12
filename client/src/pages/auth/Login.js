import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";
import BloodDonationEligibilityChecker from "./eligibility";
import './../../App.css'
const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
     
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0  text-light">
        
        <div className="col-md-8  form-banner">
         
        
         <img src="./assets/images/dd.jpg" class="img-fluid" alt="Responsive image"></img>
          
          </div>
          <div className="col-md-4 bg-dark">
          <div className="row g-0">
          <div className="col-md-12">
          <div className="link"><Link to="/check" className="nav-link">
                  CHECK ELIGIBILITY TO DONATE
                </Link></div>
          </div>
          </div>
          <div className="row g-0">
          <div className="col-md-12 form-container">
          <Form 
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
              
            />
          </div>
          </div>
          
         
         
        </div>
        
       </div>
        
      )}
    </>

  
  );
};

export default Login;
