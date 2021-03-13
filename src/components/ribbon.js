import "../styles/Ribbon.css";
const Ribbon = ({ text, color }) => {
  return (
    <div
      id="ribbon"
      style={{
        background: `-webkit-linear-gradient(top, ${color}, ${color})`,
      }}
    >
      <span id="content">{text}</span>
    </div>
  );
};

export default Ribbon;
