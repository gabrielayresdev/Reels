import api from "../api";

type RegisterProps = {
  name: string;
  email: string;
  password: string;
  phone: string;
};
type LoginProps = {
  email: string;
  password: string;
};

export default {
  async login({ email, password }: LoginProps) {
    try {
      const response = api.post(`/login`, {
        email: email,
        password: password,
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async register({ name, email, password, phone }: RegisterProps) {
    try {
      const response = api.post("/register", {
        name,
        email,
        password,
        phone,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
