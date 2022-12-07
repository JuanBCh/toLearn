import { useState } from "react";
import Button from "../General/Button";
import Score from "../General/Score";

function Main() {
  const [score, setScore] = useState(0);
  return (
    <main>
      <header>
        <div>
          <p>ROCK</p>
          <p>PAPER</p>
          <p>SCISSORS</p>
        </div>
        <Score score={score} />
      </header>
      <div>
        <Button img_src={"/images/icon-scissors.svg"} action="scissors" />
        <Button img_src={"/images/icon-paper.svg"} action="paper" />
        <Button img_src={"/images/icon-rock.svg"} action="rock" />
      </div>
    </main>
  );
}

export default Main;
