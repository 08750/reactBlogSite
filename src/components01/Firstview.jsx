// import FirstviewImg from "../assets/firstview.jpg";
import FirstviewImg from "../assets/img/firstview.jpg";
export default function Firstview({}) {
  return (
    <>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Asimovian&family=Chango&family=DotGothic16&family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <img
          src={FirstviewImg}
          alt="人の画像"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </header>
    </>
  );
}
