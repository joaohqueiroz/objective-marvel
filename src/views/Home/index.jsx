import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Navfooter from "../../components/Navfooter";
import api from "../../services/api";

import * as S from "./styles";

function Home() {
  const [chars, setChars] = useState([]);

  async function searchCharacters() {
    const publicKey = "42b5503095073dcbe5cda3d391924944"

    const { data } = await api.get("characters", {
      params: {
        apikey: publicKey,
        limit: 10,
      },
    });

    setChars(data.data.results);
  }

  useEffect(() => {
    searchCharacters();
  }, []);

  useEffect(() => {
    console.log(chars);
  }, [chars]);

  return (
    <S.Container>
      <S.Main>
        <S.Title><span>Busca de personagens</span></S.Title>
        <S.Search>
            <p>Nome do personagem</p>
            <input type="text" placeholder="Search"/>
        </S.Search>
        {/* {chars.length > 0 ? <img src={`${chars[0].thumbnail.path}/portrait_small.${chars[0].thumbnail.extension}`} alt="" /> : null} */}
      </S.Main>
      <Navfooter />
    </S.Container>
  );
}

export default Home;
