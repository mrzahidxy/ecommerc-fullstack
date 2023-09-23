export const ApiPrefix = "/api";
export const FilePrefix = `${process.env.NEXT_PUBLIC_API_URL}/static`;

export enum Api {
  // Auth
  Login = `${ApiPrefix}/Authentication/Login`, // post
  RefreshToken = `${ApiPrefix}/refresh-token`, // post
  SendMail = `${ApiPrefix}/Authenticate/ForgetPassword`, // post

  // Sidebar menu items
  GetSidebarMenu = `${ApiPrefix}/CommonService/GetNavMenus`, //get
}
