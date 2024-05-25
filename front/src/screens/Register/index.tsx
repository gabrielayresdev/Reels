import React from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";

import { useRegisterContext } from "../../contexts/RegisterContext";
import UserData from "../../components/RegisterPages/UserData";
import PagerView from "react-native-pager-view";
import UserAuth from "../../components/RegisterPages/UserAuth";

const Register = () => {
  const { pagination } = useRegisterContext();
  const pagerRef = React.useRef(null);
  React.useEffect(() => {
    // @ts-ignore
    pagerRef?.current?.setPage(pagination.page);
  }, [pagination.page]);

  return (
    <Container>
      <PagerView
        initialPage={pagination.page}
        useNext
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
