import "../styles/Shimmer.css";
const Shimmer = ({ type }) => {
  return (
    <div>
      {(() => {
        switch (type) {
          case "card":
            return (
              <div className="card shimmerCard">
                <div className="animate box"></div>
                <div className="animate lines"></div>
              </div>
            );
          case "img":
            return <div className="animate photo"></div>;
          case "list":
            return (
              <div className="pokemon-listing">
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
                <div className="card shimmerCard">
                  <div className="animate box"></div>
                  <div className="animate lines"></div>
                </div>
              </div>
            );

          default:
            return null;
        }
      })()}
    </div>
  );
};

export default Shimmer;
