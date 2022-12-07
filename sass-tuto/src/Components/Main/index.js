import { useState } from "react";
import Button from "../General/Button";
import Score from "../General/Score";
import Header from "../Header/Header";

function Main({ score, setScore }) {
  return (
    <main>
      <Header score={score} />
      <section className="butons">
        <Button img_src={"/images/icon-paper.svg"} action="paper" />
        <Button img_src={"/images/icon-scissors.svg"} action="scissors" />
        <Button img_src={"/images/icon-rock.svg"} action="rock" />
      </section>
    </main>
  );
}

export default Main;
