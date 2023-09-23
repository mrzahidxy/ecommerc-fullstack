"use client";

import { Formik } from "formik";

import { useRouter } from "next/navigation";
import { InitialValue, SignInSchema } from "./form.config";
import { SignInForm } from "./sigin.form.component";

export const SignIn = () => {
  const router = useRouter();

  return (
    <div className="h-screen bg-violet-100 flex flex-col items-center justify-center shadow-sm">
      <div className="w-1/2 bg-white shadow-xl rounded-md px-20 py-20">
        <div className="mb-6">
          <p className="text-3xl">Traveller</p>
          <h4 className="font-semibold text-2xl mb-1">Welcome.</h4>
        </div>
        <Formik
          initialValues={InitialValue}
          validationSchema={SignInSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => <SignInForm />}
        </Formik>
        <div className="mt-6 text-xs">
          <p>Already a member?</p>
          <p>
            <span
              className="cursor-pointer font-semibold"
              onClick={() => router.push("/auth/login")}
            >
              Log in{" "}
            </span>
            to explore best of Traveller.
          </p>
        </div>
      </div>
    </div>
  );
};
