const Button = ({ text, color = false }) => {
  return (
    <>
      <button className="">
        {text}
        {color ? "ok" : "not ok"}
      </button>
      <br />
    </>
  );
};

export default Button;
