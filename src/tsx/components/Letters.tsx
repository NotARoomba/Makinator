export default function Letters() {
  const letters = [..."/?<>⋅=+÷^*!±√Δ∞∑φπ∏∝∫"];
  const colors = ["#5435cb", "#7499fd", "#D7263D", "#1B998B"];
  return (
    <ul className="absolute m-0 top-0 left-0 overflow-x-hidden overflow-y-hidden w-full h-full -z-10 bg-background">
      {[...Array(50)].map((_v, i) => {
        const wh = Math.floor(Math.random() * 131) + 60;
        return (
          <li
            className="absolute flex list-none align-middle justify-center text-8xl w-5 h-5 -bottom-48 animate-animatedLetters"
            key={i}
            style={{
              left: `${Math.floor(Math.random() * 111) - 10}%`,
              color: colors[Math.floor(Math.random() * colors.length)],
              width: wh,
              height: wh,
              animationDelay: `${Math.floor(Math.random() * 8)}s`,
              animationDuration: `${Math.floor(Math.random() * 51) + 10}s`,
            }}
          >
            {letters[Math.floor(Math.random() * letters.length)]}
          </li>
        );
      })}
    </ul>
  );
}
