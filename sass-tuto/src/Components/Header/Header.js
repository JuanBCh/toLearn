import Score from "../General/Score";

function Header({ score }) {
  return (
    <header>
      <div>
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
      </div>
      <Score score={score} />
    </header>
  );
}

export default Header;
