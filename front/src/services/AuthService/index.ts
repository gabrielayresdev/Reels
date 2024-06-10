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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async register({ name, email, password, phone }: RegisterProps) {
    try {
      const response = api.post("/register", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
        }),
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
