import React, { FormEvent, useRef, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// we create an interface that represents the shape of the form...
// interface FormData {
//   name: string;
//   age: number;
// }

const schema = z.object({
  name: z.string().min(3, { message: "Name must be atleast 3 characters long" }),
  age: z.number({ invalid_type_error: "Age Field is Required" }).min(18, { message: "Age must be atleast 18" }),
});

type FormData = z.infer<typeof schema>; // we can also use type to store the structure of the form data

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, // to handle error for the validation..
  } = useForm<FormData>({ resolver: zodResolver(schema) }); // these are the properties of the react-form-hook

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input {...register("name")} id="name" type="text" className="form-control" />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input {...register("age", { valueAsNumber: true })} id="age" type="number" className="form-control" />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
