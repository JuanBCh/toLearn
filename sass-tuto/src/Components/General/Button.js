function Button({ action, img_src, btntxt, onClick }) {
  return img_src ? (
    <button className={`round ${action}-border`} onClick={onClick}>
      <div>
        <img src={img_src} />
      </div>
    </button>
  ) : (
    <button className={`normal`} onClick={onClick}>
      {btntxt}
    </button>
  );
}

export default Button;
