"use client";

import { Formik } from "formik";
import { InitialValue, LogInSchema } from "./form.config";
import { LogInForm } from "./login-form.component";
import { useRouter } from "next/navigation";

export const Login = () => {
  const router = useRouter();

  return (
    <div className="h-screen bg-violet-100 flex flex-col items-center justify-center shadow-sm">
      <div className="w-1/3 bg-white shadow-xl rounded-md px-20 py-20">
        <div className="mb-6">
          <span className="text-3xl mr-[2px">Onoya, </span>
          <span className="text-xl">Seller Dashboard</span>
        </div>
        <Formik
          initialValues={InitialValue}
          validationSchema={LogInSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => <LogInForm />}
        </Formik>
      </div>
    </div>
  );
};
