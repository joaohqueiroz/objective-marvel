import React from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
} from "react-icons/hi";
import useWindowSize from "../../services/useWindowSize";
import * as S from "./styles";

function Navfooter({ limit, total, offset, setOffset }) {
  const MAX_ITEMS = useWindowSize().width > 600 ? 5 : 3;
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(Math.max(current - MAX_LEFT, 1), maxFirst);

  function onPageChange(modificator) {
    setOffset(modificator * limit);
  }

  return (
    <S.Container>
      <S.List>
        {current > 1 && (
          <>
            <S.ActionItem onClick={() => onPageChange(0)}>
              <HiChevronDoubleLeft />
            </S.ActionItem>
            <S.ActionItem onClick={() => onPageChange(current - 2)}>
              <HiChevronLeft />
            </S.ActionItem>
          </>
        )}
        {Array.from({ length: Math.min(MAX_ITEMS, pages) })
          .map((_, index) => index + first)
          .map((page) => (
            <S.ListItem key={page}>
              <button
                onClick={() => onPageChange(page - 1)}
                className={page === current ? "selected" : ""}
              >
                <span>{page}</span>
              </button>
            </S.ListItem>
          ))}
        {current < pages && (
          <>
            <S.ActionItem onClick={() => onPageChange(pages - 1)}>
              <HiChevronDoubleRight />
            </S.ActionItem>
            <S.ActionItem onClick={() => onPageChange(current)}>
              <HiChevronRight />
            </S.ActionItem>
          </>
        )}
      </S.List>
    </S.Container>
  );
}

export default Navfooter;
