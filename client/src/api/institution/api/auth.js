import axios from "../../axios";

export const login = (data: PostLoginBody): Promise<any> =>
  axios({
    method: "post",
    url: "/login",
    data,
  });

export const authenticate = (id: AccountId): Promise<any> =>
  axios({
    method: "post",
    url: `/account/${id}/authenticate?type=admin`,
  });

export default { login, authenticate };
