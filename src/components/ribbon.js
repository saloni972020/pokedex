import "../styles/Ribbon.css";
const Ribbon = ({ text, color }) => {
  const styleColor = {
    "--color": color,
    background: `-webkit-linear-gradient(top, ${color}, ${color})`,
  };
  return (
    <div id="ribbon" style={styleColor}>
      <span id="content">{text}</span>
    </div>
  );
};

export default Ribbon;
