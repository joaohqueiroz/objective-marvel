import React from "react";

import * as S from "./styles";

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

function Navfooter({ limit, total, offset, setOffset }) {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  return (
    <S.Container>
      <S.List>
        {Array.from({ length: Math.min(MAX_ITEMS, pages) })
          .map((_, index) => index + first)
          .map((page) => (
            <S.ListItem key={page}>
              <button
                onClick={() => setOffset((page - 1) * limit)}
                className={page === current && "selected"}
              >
                <span>{page}</span>
              </button>
            </S.ListItem>
          ))}
      </S.List>
    </S.Container>
  );
}

export default Navfooter;
