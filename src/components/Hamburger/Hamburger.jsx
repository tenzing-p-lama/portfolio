import "./Hamburger.scss";

const Hamburger = ({ isOpen, onClick }) => {
  return (
    <>
      <div className="hamburger" onClick={onClick}>
        {isOpen ? (
          <div
            className="burger burger1"
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
          ></div>
        ) : (
          <div className="burger"></div>
        )}

        {isOpen ? (
          <div
            className="burger burger3"
            style={{
              transform: isOpen ? "rotate(-45deg)" : "rotate(0)",
            }}
          ></div>
        ) : (
          <div
            className="burger"
            style={{
              opacity: isOpen ? "1" : "0",
            }}
          ></div>
        )}
      </div>
    </>
  );
};

export default Hamburger;
