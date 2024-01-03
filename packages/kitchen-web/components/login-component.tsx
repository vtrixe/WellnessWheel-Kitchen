"use client"

import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
  example: string
  exampleRequired: string
}


export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


  console.log(watch("example")) 


  return (

    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-8">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="example">
        Example
      </label>
      <input
        defaultValue="test"
        {...register("example")}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="example"
        type="text"
        placeholder="Example"
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="exampleRequired">
        Example Required
      </label>
      <input
        {...register("exampleRequired", { required: true })}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          errors.exampleRequired ? "border-red-500" : ""
        }`}
        id="exampleRequired"
        type="text"
        placeholder="Example Required"
      />
      {errors.exampleRequired && (
        <p className="text-red-500 text-xs italic">This field is required</p>
      )}
    </div>

    <div className="mb-4">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </div>
  </form>
  )
}