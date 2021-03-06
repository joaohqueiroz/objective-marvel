import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import Item from "../../components/Item";
import Navfooter from "../../components/Navfooter";
import api from "../../services/api";

import * as S from "./styles";

function Home() {
  const [chars, setChars] = useState([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");

  async function searchCharacters() {
    const publicKey = "42b5503095073dcbe5cda3d391924944";

    const { data } = await api.get("characters", {
      params: {
        apikey: publicKey,
        limit: 10,
        offset,
        nameStartsWith: name ? name : null,
      },
    });

    setTotal(data.data.total);
    setChars(data.data.results);
  }

  useEffect(() => {
    searchCharacters();
  }, [name, offset]);

  function handleName() {
    const newName = document.getElementById("name").value;
    setOffset(0);
    setName(newName);
  }

  return (
    <S.Container>
      <S.Main>
        <S.Title>
          <span>Busca de personagens</span>
        </S.Title>
        <S.Search>
          <p>Nome do personagem</p>
          <S.InputWrapper>
            <input
              type="text"
              placeholder="Search"
              autoComplete="off"
              id="name"
            />
            <button onClick={handleName}>
              <Search />
            </button>
          </S.InputWrapper>
        </S.Search>
        {chars.length > 0 ? (
          <>
            <S.ListTitle>
              <span>Personagem</span>
              <span className="hide">Séries</span>
              <span className="hide">Eventos</span>
            </S.ListTitle>
            <S.ItemsList>
              {chars.map((item, index) => {
                return (
                  <Link to={`/details/${item.id}`} key={item.id}>
                    <Item char={item} key={index} />
                  </Link>
                );
              })}
            </S.ItemsList>
          </>
        ) : (
          <S.Empty>Nenhum resultado foi encontrado</S.Empty>
        )}
      </S.Main>
      <Navfooter
        limit={10}
        total={total}
        offset={offset}
        setOffset={setOffset}
      />
    </S.Container>
  );
}

export default Home;
