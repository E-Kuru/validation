import { useFormik } from 'formik'
import * as Yup from 'yup'
import {  useState } from 'react'

import Nav from '../../components/Nav/Nav'

const AddUsers = () => {

  const [errors, setErrors] = useState(null)

    const formik = useFormik({
        initialValues: {
          name: "",
          password: "",
          email: "",
          city: "",

        },
        onSubmit: values => {
          fetch('http://localhost:5000/',{
            method : 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              slug : values.name.toLocaleLowerCase(),
              ...values
            })
          })
          .then(res => res.json())
          .then(res => {
            if(res.errors){
              setErrors(res)
            }
            else{
              alert("All's good, user added")
            }
          })
        },
        validationSchema: Yup.object().shape({
          name: Yup.string()
            .min(4, "Username est trop court")
            .required("Username est requis"),
          password: Yup.string()
            .min(8, "password trop court")
            .required('Password is required'),
          city: Yup.string()
            .required('City is required'),
          email: Yup.string()
            .required('Mail is required')
        }),
      })
      
    return (
        <>
        <Nav/>
        <form onSubmit={formik.handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
            />
            <br />
            <input
                type="password"
                name="password"
                placeholder="enter password"
                value={formik.values.password}
                onChange={formik.handleChange}
            />
            <br />
            <input
                type="text"
                name="city"
                placeholder="name of your city"
                value={formik.values.city}
                onChange={formik.handleChange}
            />
            <br />
            <input
                type="email"
                name="email"
                placeholder="Your mail"
                value={formik.values.email}
                onChange={formik.handleChange}
            />
            <br />
            <button type="submit">Submit</button>
        </form>
        {errors && ( 
          <>
            {errors.errors.map(e => (
              <h2 style={{fontSize : '30px'}}>{e.msg}</h2>
            ))}
          </>
        )}
        </>
    )
}

export default AddUsers
