import { usePost } from "@/features/api";
import { User } from "@/features/models";
import * as yup from "yup";

export const LogInSchema = yup.object({
  username: yup.string().label("Username").min(1).max(50).required(),
  password: yup.string().label("Password").min(4).required(),
});

export type LogInRequest = yup.InferType<typeof LogInSchema>;

export const InitialValue: LogInRequest = {
  username: "",
  password: "",
};

type LogInResponse = {
  access_token: string;
  refresh_token: string;
  user: User;
};

export type LogInApiResponse = ReturnType<typeof usePost<LogInRequest, LogInResponse>>;
export type LogInApiError = LogInApiResponse["error"];
