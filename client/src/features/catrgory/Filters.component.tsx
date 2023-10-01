import React from "react";
import { FormikReactSelect } from "../ui/form/formik-select.component";
import { Formik } from "formik";

type Props = {};

const Filters = (props: Props) => {
  return (
    <div>
      <div>
        <span>Colors:</span>
        <div className="flex gap-2">
          <div className="bg-red-500 w-4 h-4 rounded-full cursor-pointer"></div>
          <div className="bg-blue-500 w-4 h-4 rounded-full cursor-pointer"></div>
          <div className="bg-yellow-500 w-4 h-4 rounded-full cursor-pointer"></div>
        </div>
        <div>
          <Formik initialValues={{}} onSubmit={() => {}}>
            <div className="space-x-2">
              <FormikReactSelect name="size" />
            </div>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Filters;
