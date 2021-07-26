import React from "react";
import { connect } from "react-redux";
import { addEmployee } from "../../../redux/actions/empActions";
import "./form.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  contact: yup.string().required(),
  city: yup.string().required(),
});

const Form = ({ addEmployee }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData) => {
    addEmployee(formData);
  };

  return (
    <form className="emp-form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("name")} type="text" placeholder="Name" />
        <p className="error"> {errors["name"]?.message} </p>
      </div>
      <div>
        <input {...register("email")} type="email" placeholder="Email" />
        <p className="error"> {errors["email"]?.message} </p>
      </div>
      <div>
        <input {...register("contact")} type="text" placeholder="Contact" />
        <p className="error"> {errors["contact"]?.message} </p>
      </div>
      <div>
        <input {...register("city")} type="text" placeholder="City" />
        <p className="error"> {errors["city"]?.message} </p>
      </div>
      <div className="add-btn">
        <button type="submit">+ Add</button>
      </div>
    </form>
  );
};

export default connect(null, { addEmployee })(Form);
