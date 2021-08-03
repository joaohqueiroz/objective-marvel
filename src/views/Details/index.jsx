import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { HiChevronLeft, HiChevronDown, HiChevronUp } from "react-icons/hi";
import api from "../../services/api";

import * as S from "./styles";

function Details() {
  const { id } = useParams();
  const [char, setChar] = useState({});
  const [series, setSeries] = useState([]);
  const [events, setEvents] = useState([]);
  const [seriesLimit, setSeriesLimit] = useState(3);
  const [eventsLimit, setEventsLimit] = useState(3);
  const [totalSeries, setTotalSeries] = useState(3);
  const [totalEvents, setTotalEvents] = useState(3);

  async function searchCharacter() {
    const publicKey = "42b5503095073dcbe5cda3d391924944";

    const { data } = await api.get(`characters/${id}`, {
      params: {
        apikey: publicKey,
      },
    });

    setChar(data.data.results[0]);
  }

  async function searchSeries() {
    const publicKey = "42b5503095073dcbe5cda3d391924944";

    const { data } = await api.get(`characters/${id}/series`, {
      params: {
        apikey: publicKey,
        limit: seriesLimit,
      },
    });

    setTotalSeries(data.data.total);
    setSeries(data.data.results);
  }

  async function searchEvents() {
    const publicKey = "42b5503095073dcbe5cda3d391924944";

    const { data } = await api.get(`characters/${id}/events`, {
      params: {
        apikey: publicKey,
        limit: eventsLimit,
      },
    });

    setTotalEvents(data.data.total);
    setEvents(data.data.results);
  }

  useEffect(() => {
    searchCharacter();
  }, []);

  useEffect(() => {
    searchSeries();
    searchEvents();
  }, [char]);

  useEffect(() => {
    searchSeries();
  }, [seriesLimit]);

  useEffect(() => {
    searchEvents();
  }, [eventsLimit]);

  function showMoreSeries() {
    setSeriesLimit(seriesLimit + 3);
  }

  function hideSeries() {
    setSeriesLimit(3);
  }

  function showMoreEvents() {
    setEventsLimit(eventsLimit + 3);
  }

  function hideEvents() {
    setEventsLimit(3);
  }

  function makeImgSrc(variant, obj) {
    return `${obj.thumbnail.path}/${variant}.${obj.thumbnail.extension}`;
  }

  function handleSeriesButtons() {
    return totalSeries >= seriesLimit ? (
      <S.Button onClick={() => showMoreSeries()}>
        <HiChevronDown />
        Ver mais
      </S.Button>
    ) : (
      <S.Button onClick={() => hideSeries()}>
        <HiChevronUp />
        Esconder
      </S.Button>
    );
  }

  function handleEventsButtons() {
    return totalEvents >= eventsLimit ? (
      <S.Button onClick={() => showMoreEvents()}>
        <HiChevronDown />
        Ver mais
      </S.Button>
    ) : (
      <S.Button onClick={() => hideEvents()}>
        <HiChevronUp />
        Esconder
      </S.Button>
    );
  }

  return (
    <S.Container>
      <Link to="/">
        <S.Button left>
          <HiChevronLeft />
          Voltar
        </S.Button>
      </Link>
      <S.Char>
        <S.Avatar
          src={char.thumbnail ? makeImgSrc("standard_xlarge", char) : ""}
        />
        <S.Title>{char.name}</S.Title>
      </S.Char>
      {series.length > 0 ? (
        <S.Content>
          <S.Title>Séries</S.Title>
          <S.ContentWrapper>
            {series.map((serie) => {
              return (
                <S.ContentItem key={serie.id}>
                  <S.ContentImg src={makeImgSrc("portrait_xlarge", serie)} />
                  <S.ContentName>{serie.title}</S.ContentName>
                </S.ContentItem>
              );
            })}
          </S.ContentWrapper>
          {totalSeries > 3 && handleSeriesButtons()}
        </S.Content>
      ) : null}
      {events.length > 0 ? (
        <S.Content>
          <S.Title>Eventos</S.Title>
          <S.ContentWrapper>
            {events.map((event) => {
              return (
                <S.ContentItem key={event.id}>
                  <S.ContentImg src={makeImgSrc("portrait_xlarge", event)} />
                  <S.ContentName>{event.title}</S.ContentName>
                </S.ContentItem>
              );
            })}
          </S.ContentWrapper>
          {totalEvents > 3 && handleEventsButtons()}
        </S.Content>
      ) : null}
    </S.Container>
  );
}

export default Details;
