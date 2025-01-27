import ApiMethods from "./ApiMethods";
import ENDPOINTS from "./EndPoints";
import User from "../model/User";



class ApiManager {

   static getPosts = () => {
      const url = ENDPOINTS.POSTS();
      return ApiMethods.get(url, {});
   };


   static getUsers = async () => {
      const url = ENDPOINTS.USER();
      const response = await ApiMethods.get(url, {});
      const users = User.fromJson(response);
      return users;
   };

}

export default ApiManager;