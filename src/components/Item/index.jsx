import React from "react";

import * as S from "./styles";

function Item({ char }) {
  function makeImgSrc() {
    return `${char.thumbnail.path}/portrait_small.${char.thumbnail.extension}`;
  }

  function hasSeries() {
    return char.series.available > 0;
  }

  function hasEvents() {
    return char.events.available > 0;
  }

  function handleSeries() {
    let limit;
    let series = [];
    if (char.series.available >= 3) limit = 3;
    else limit = char.series.available;

    for (let i = 0; i < limit; i++) {
      series.push(char.series.items[i].name);
    }

    return series;
  }

  function handleEvents() {
    let limit;
    let events = [];
    if (char.events.available >= 3) limit = 3;
    else limit = char.events.available;

    for (let i = 0; i < limit; i++) {
      events.push(char.events.items[i].name);
    }

    return events;
  }

  return (
    <S.Container>
      <S.Char>
        <S.Img src={makeImgSrc()} />
        <S.Name>{char.name}</S.Name>
      </S.Char>
      <S.Content>
        {!hasSeries() ? (
          <S.Text>Não há séries disponíveis</S.Text>
        ) : (
          handleSeries().map((serie, index) => {
            return <S.Text key={index}>{serie}</S.Text>;
          })
        )}
      </S.Content>
      <S.Content>
        {!hasEvents() ? (
          <S.Text>Não há eventos disponíveis</S.Text>
        ) : (
          handleEvents().map((event, index) => {
            return <S.Text key={index}>{event}</S.Text>;
          })
        )}
      </S.Content>
    </S.Container>
  );
}

export default Item;
