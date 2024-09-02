import { useState } from 'react';
import './App.css';
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (seconds) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, seconds * 1000);
    });
  }

  const onSubmit = async (data) => {
    // await delay(2);

    try {
      let r = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",  // Specify the content type
        },
        body: JSON.stringify(data),
      });
      let res = await r.text();
      console.log(data, res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    console.log(data);
    // Additional form validation logic
  }

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input 
            placeholder='username' 
            {...register("username", { 
              required: true, 
              minLength: { value: 4, message: "min length is 4" } 
            })} 
            type="text" 
          />
          {errors.username && <div style={{color: "red"}}>{errors.username.message}</div>}
          <br />
          <input 
            placeholder='password' 
            {...register("password", { minLength: { value: 8, message: "min length is 8" } })} 
            type="password" 
          />
          {errors.password && <div style={{color: "red"}}>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit"/>
          {errors.myform && <div style={{color: "red"}}>{errors.myform.message}</div>}
          {errors.blocked && <div style={{color: "red"}}>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App;
