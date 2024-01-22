import { ScoreData, scores } from "./data";

const ScoreTable: React.FC = () => {
  const sortedScores = scores.sort((a, b) => b.score - a.score);

  return (
    <div className="mx-auto bg-black h-screen w-screen flex flex-col items-center justify-center">
      <a
        href="https://10fastfingers.com/typing-test/english"
        target="_blank"
        className="text-white/90 absolute top-[206px] text-[20px] tracking-wide hover:text-[#29df2c] transition-all duration-300 animate-pulse"
      >
        10fastfingers.com
      </a>
      <div className="absolute top-[140px] text-[50px] text-[#29df2c] font-extrabold">
        <span>AGRP</span>.<span>DEV</span>
      </div>
      <div className="container text-center">
        <table className="min-w-full font-consolas text-white/90 text-[18px]">
          <thead className="text-[#29df2c] font-bold text-[36px]">
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Score</th>
              <th className="py-2 px-4">Fingers</th>
            </tr>
          </thead>
          <tbody className="border">
            {sortedScores.map((row: ScoreData, index: number) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-black" : "bg-[#1b1b1b]"}
              >
                <td className="py-2 px-4 w-1/3 text-center border-r">
                  {row.name}
                </td>
                <td
                  className={`
                    py-2 px-4 text-center border-r w-1/3`}
                >
                  {row.score}
                </td>
                <td className="py-2 px-4 text-center w-1/3">{row.fingers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

function App() {
  return <ScoreTable />;
}

export default App;
