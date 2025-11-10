// import LogoImg from "../assets/BAMOSDESIGN.svg";
import LogoImg from "../assets/img/BAMOSDESIGN.svg";
import Humburger from "./ Humburger";

export default function Header({}) {
  return (
    <>
      <div class="headercontainer">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Asimovian&family=Chango&family=DotGothic16&family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />

        <img src={LogoImg} alt="ロゴマーク" />
        <Humburger />
      </div>
    </>
  );
}
