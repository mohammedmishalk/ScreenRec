import React from 'react'

export default function Form() {
  return (
    <div>   <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    {({ errors, touched }) => (
      <Form className="h-56 left-[16px] top-[281px] absolute flex-col justify-start items-start gap-6 inline-flex sm:h-56 sm:left-[80px] sm:top-[281px] sm:absolute sm:flex-col sm:justify-start sm:items-start sm:gap-6 sm:inline-flex">
        <div className="w-[522px] justify-start items-start gap-6 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
            <div className="text-gray-400 text-base font-medium leading-none">
              First Name
            </div>
            <Field
              type="text"
              name="first_name"
              className="w-[170px] h-12 bg-white text-xl rounded-[5px] outline-none sm:w-[295px] sm:h-12 sm:bg-white sm:text-xl sm:rounded-[5px] sm:outline-none "
            />
            <ErrorMessage
              name="first_name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          {/* Last Name input field */}
          <div className="w-[2250px] flex-col justify-start items-start gap-4 inline-flex sm:w-[225px] sm:flex-col sm:justify-start sm:items-start sm:gap-4 sm:inline-flex">
            <div className="text-gray-400 text-base font-medium leading-none">
              Last Name
            </div>
            <Field
              type="text"
              name="last_name"
              className="w-[170px] h-12 flex  bg-white text-xl rounded-[5px] outline-none sm:w-[281px] sm:h-12 sm:bg-white sm:text-xl sm:rounded-[5px] sm:outline-none"
            />
            <ErrorMessage
              name="last_name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
        </div>
        {/* Email input field */}
        <div className=" w-[365px] h-12 pl-5 bg-white rounded-md justify-start items-center inline-flex sm:w-[600px] sm:h-12 sm:pl-5 sm:bg-white sm:rounded-md sm:justify-start sm:items-center sm:inline-flex">
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="w-full h-10 border-none bg-transparent text-xl outline-none"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        {/* Phone Number input field */}
        <div className="w-[365px] h-12 pl-5 bg-white rounded-md justify-start items-center inline-flex sm:w-[600px] sm:h-12 sm:pl-5 sm:bg-white sm:rounded-md sm:justify-start sm:items-center sm:inline-flex">
          <span className="text-xl mr-2">+91</span>
          <Field
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            className=" w-[200px] h-10 border-none bg-transparent text-xl outline-none sm:w-full sm:h-10 sm:border-none sm:bg-transparent sm:text-xl sm:outline-none"
          />
        </div>
        <ErrorMessage
          name="phone_number"
          component="div"
          className="text-red-500 text-sm"
        />
        {/* <button
          type="submit"
          className="w-[85px] h-12 px-6 py-4 left-[592px] top-0 absolute bg-blue-600 rounded-md justify-center items-center gap-3 inline-flex cursor-pointer"
        >
          <div className="text-violet-50 text-base font-bold leading-none">
            Next
          </div>
        </button> */}
      </Form>
    )}
  </Formik></div>
  )
}
