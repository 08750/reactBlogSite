import React from "react";

export default function ForList({ src }) {
  return (
    <dl key={elem.category}>
      {src.map((elem) => (
        <React.Fragment>
          <dt>
            <a
              href={`https://syo-m.github.io/componentsImages/images/${title}.webp`}
            >
              {elem.category}({elem.title})
            </a>
          </dt>
          <dd>{elem.author}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
