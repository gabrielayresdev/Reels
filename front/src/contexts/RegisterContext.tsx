import React from "react";
import usePagination from "../hooks/usePagination";
import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormTrigger,
  UseFormWatch,
  useForm,
} from "react-hook-form";

const RegisterContext = React.createContext<RegisterContextProps | null>(null);

export type RegisterProps = {
  email: string;
  password: string;
  password2: string;
  name: string;
  phone: string;
};

type Pagination = {
  page: number;
  goBack: VoidFunction;
  goNext: VoidFunction;
  goTo: (page: number) => void;
};

type RegisterContextProps = {
  pagination: Pagination;
  control: Control<RegisterProps, any>;
  errors: FieldErrors<RegisterProps>;
  watch: UseFormWatch<RegisterProps>;
  trigger: UseFormTrigger<RegisterProps>;
  handlePartialSubmit: (
    fields: (keyof RegisterProps)[],
    callback: Function
  ) => void;
  handleSubmit: UseFormHandleSubmit<RegisterProps, RegisterProps>;
};

export function useRegisterContext() {
  const context = React.useContext(RegisterContext);
  if (!context) throw new Error("useContext must be inside provider");
  else return context;
}

const RegisterContextProvider = ({ children }: React.PropsWithChildren) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      password2: "",
      name: "",
      phone: "",
    },
  });
  const pagination = usePagination(2);

  const handlePartialSubmit = async (
    fields: (keyof RegisterProps)[],
    callback: Function
  ) => {
    const isFieldsValid = await Promise.all(
      fields.map((field) => trigger(field))
    );
    if (isFieldsValid.every((valid) => valid)) {
      callback();
    }
  };

  return (
    <RegisterContext.Provider
      value={{
        control,
        handleSubmit,
        errors,
        trigger,
        watch,
        handlePartialSubmit,
        pagination,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContextProvider;
