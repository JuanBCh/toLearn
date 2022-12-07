import { useState } from "react";
import Button from "../General/Button";
import Header from "../Header/Header";

function Figth({ score }) {
  const [picked, setPicked] = useState(false);

  return (
    <main>
      <Header score={score} />
      <section className="figth">
        <aside className="you-picked">
          <p>YOU PICKED</p>
          <Button img_src={"/images/icon-paper.svg"} action="paper" />
        </aside>
        <aside className="the-house-picked">
          <p>THE HOUSE PICKED</p>
          {picked ? (
            <Button img_src={"/images/icon-paper.svg"} action="paper" />
          ) : null}
        </aside>
      </section>
    </main>
  );
}

export default Figth;
