import { useFormik } from 'formik';
import React from 'react';
import * as Yup from "yup";
import "./signin.css";

const FormikSignUp = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Không bỏ trống").min(4, "phải 4 ký tự hoặc hơn"),
      email: Yup.string().required("Không bỏ trống email").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "email không hợp lệ"),
      password: Yup.string().required("Không bỏ trống password").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/, "password không hợp lệ"),
      confirmPassword: Yup.string().required("Không bỏ trống confirmPassword").oneOf([Yup.ref("password"), null], "password must match"),
      phone: Yup.string().required("Không bỏ trống").matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, "Must be a valid phone number")
    }),
    onSubmit: (values) => {
      console.log("👙 🏊‍♀️  🏄‍♀️ 🌴 🌊  ~ values:", values);
      window.alert("form submit thành công");
    }
  });

  return (
    <section>
      <form className='infoform' onSubmit={formik.handleSubmit} >
        <label>Your name</label>
        <input
          type="text"
          id='name'
          name='name'
          placeholder='Enter your name'
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <p className='errorMsg' >{formik.errors.name}</p>
        )}

        <label>Email address</label>
        <input
          type="text"
          id='email'
          name='email'
          placeholder='Enter your email'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && (
          <p className='errorMsg' >{formik.errors.email}</p>
        )}

        <label>Password</label>
        <input
          type="text"
          id='password'
          name='password'
          placeholder='Enter your password'
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && (
          <p className='errorMsg' >{formik.errors.password}</p>
        )}

        <label>Confirm password</label>
        <input
          type="text"
          id='confirmPassword'
          name='confirmPassword'
          placeholder=' Confirm your password'
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        {formik.errors.confirmPassword && (
          <p className='errorMsg' >{formik.errors.confirmPassword}</p>
        )}

        <label>Phone number</label>
        <input
          type="text"
          id='phone'
          name='phone'
          placeholder='Enter your phone numbers'
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.errors.phone && (
          <p className='errorMsg'>{formik.errors.phone}</p>
        )}
        <button type='submit'>Continue</button>
      </form>
    </section>
  );
};

export default FormikSignUp;