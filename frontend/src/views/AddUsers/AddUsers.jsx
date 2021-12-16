import { useFormik } from 'formik'
import * as Yup from 'yup'

import Nav from '../../components/Nav/Nav'

const AddUsers = () => {

    const formik = useFormik({
        initialValues: {
          name: "",
          password: "",
          city: "",

        },
        onSubmit: values => {
          console.log(values);
          fetch('http://localhost:5000/',{
            method : 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(values)

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
            .required('City is required')
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
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default AddUsers
