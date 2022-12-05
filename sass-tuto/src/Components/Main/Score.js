function Score({ className, color, img_src }) {
  return (
    <button className={`${className} ${color}-border`} onClick={onClick}>
      <img src={img_src} />
    </button>
  );
}

export default Score;
