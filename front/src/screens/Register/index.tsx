import React from "react";
import { FlatList, View } from "react-native";
import { Container } from "./styles";
import { Controller, useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import usePagination from "../../hooks/usePagination";

import RegisterContextProvider, {
  useRegisterContext,
} from "../../contexts/RegisterContext";
import UserData from "../../components/RegisterPages/UserData";
import PagerView from "react-native-pager-view";
import { NativeProps } from "react-native-pager-view/lib/typescript/PagerViewNativeComponent/PagerViewNativeComponent";
import UserAuth from "../../components/RegisterPages/UserAuth";

const Register = () => {
  const { pagination } = useRegisterContext();
  const pagerRef = React.useRef(null);
  React.useEffect(() => {
    pagerRef?.current?.setPage(pagination.page);
  }, [pagination.page]);

  return (
    <Container>
      <PagerView
        initialPage={pagination.page}
        useNext
        style={{ flex: 1 }}
        scrollEnabled={false}
        ref={pagerRef}
      >
        <UserData />
        <UserAuth />
      </PagerView>
    </Container>
  );
};

export default Register;
