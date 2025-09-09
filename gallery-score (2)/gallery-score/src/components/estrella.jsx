// estrella.jsx
function Estrella({ active, onClick, star }) {
  return (
    <>
        <div>
            <span className={active ? "active" : "star"}>
            <a
                onClick={onClick}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
                {'\u2605'}
            </a>
            </span>
        </div>
    </>
  );
}

export default Estrella;