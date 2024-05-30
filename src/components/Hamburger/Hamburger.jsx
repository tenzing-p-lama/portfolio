import "./Hamburger.scss";

const Hamburger = ({ isOpen, onClick }) => {
  return (
    <>
      <div className="hamburger" onClick={onClick}>
        {isOpen ? (
          <div
            className="burger burger1"
            style={{ transform: isOpen ? "rotate(35deg)" : "rotate(0)" }}
          ></div>
        ) : (
          <div className="burger"></div>
        )}

        {isOpen ? (
          <div
            className="burger burger3"
            style={{
              transform: isOpen ? "rotate(-35deg)" : "rotate(0)",
            }}
          ></div>
        ) : (
          <div className="burger"></div>
        )}
      </div>
    </>
  );
};

export default Hamburger;
