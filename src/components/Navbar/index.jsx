import React from "react";
import Logo from "../../assets/images/logo.png";
import Avatar from "../../assets/images/avatar.jpg";

import * as S from "./styles";

function Navbar() {
  return (
    <S.Container>
      <S.Logo>
        <img src={Logo} alt="logo" />
      </S.Logo>
      <S.Info>
        <S.TextInfo>
          <S.Name>João Henrique</S.Name>
          <S.Description>Teste de Front-end</S.Description>
        </S.TextInfo>
        <S.Avatar src={Avatar} alt="avatar" />
      </S.Info>
    </S.Container>
  );
}

export default Navbar;
