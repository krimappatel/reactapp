import React from 'react'
import { useForm } from 'react-hook-form';
import {useParams, withRouter} from 'react-router-dom'

function Formhook(props) {
    // React dynamic params use buy useParams()
    const {id}=useParams();
    const {register,handleSubmit,formState: { errors },watch}=useForm({defaultValues:{
        fullname:"krima",
      }
    });
    
      const onSubmit = data => console.log(data);
      const fullName=watch("fullname");
      console.log(errors)
      return (
        <>
        <div>
          <div className='container py-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" className="form-control" id="fullname" {...register("fullname", { required: true })}/>
                <p>{fullName}</p>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" {...register("email", { required: true })}/>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" className="form-control" id="phone" {...register("phone", { required: true,maxLength:10 })}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" {...register("password", { required: true })}/>
              </div>
              <input type="submit" />
            </form>
          </div>
          <p>route parameters id:{id}</p>
        </div>
        </>
      );
    }

export default Formhook;
