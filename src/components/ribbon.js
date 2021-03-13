import "../styles/Ribbon.css";
const Ribbon = ({ text }) => {
  return (
    <div id="ribbon">
      <span id="content">{text}</span>
    </div>
  );
};

export default Ribbon;
