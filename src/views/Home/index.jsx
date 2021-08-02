import React, { useEffect, useState } from "react";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import Item from "../../components/Item";
import Navfooter from "../../components/Navfooter";
import api from "../../services/api";

import * as S from "./styles";

function Home() {
  const [chars, setChars] = useState([]);

  async function searchCharacters() {
    const publicKey = "42b5503095073dcbe5cda3d391924944";

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

  return (
    <S.Container>
      <S.Main>
        <S.Title>
          <span>Busca de personagens</span>
        </S.Title>
        <S.Search>
          <p>Nome do personagem</p>
          <S.InputWrapper>
            <input type="text" placeholder="Search" />
            <button>
              <Search />
            </button>
          </S.InputWrapper>
        </S.Search>
        <S.ListTitle>
          <span>Personagem</span>
          <span className="hide">Séries</span>
          <span className="hide">Eventos</span>
        </S.ListTitle>
        <S.ItemsList>
          {chars.map((item, index) => {
            console.log(item)
            return <Item char={item} key={index}/>;
          })}
        </S.ItemsList>
      </S.Main>
      <Navfooter />
    </S.Container>
  );
}

export default Home;
