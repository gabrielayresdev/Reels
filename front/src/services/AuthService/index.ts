import { User } from "../../contexts/AuthContext";
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
      const response = api.post<{ user: User; token: string }>(`/login`, {
        email: email,
        password: password,
      });
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
  async getData(token: string) {
    try {
      const response = api.get<{ user: User }>("/getData", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
