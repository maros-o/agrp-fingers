import { ScoreData, scores } from "./data";

const TyperTable: React.FC = () => {
  const sortedScores = scores.sort((a, b) => b.score - a.score);

  return (
    <table className="min-w-full font-consolas text-white/90 text-[18px]">
      <thead className="text-[#29df2c] font-bold text-[18px] md:text-[36px] tracking-wide">
        <tr>
          <th className="py-2">RANK</th>
          <th className="">TYPER</th>
          <th className="">SCORE</th>
          <th className="">FINGERS</th>
        </tr>
      </thead>
      <tbody className="border text-center">
        {sortedScores.map((row: ScoreData, index: number) => (
          <tr
            key={index}
            className={index % 2 === 0 ? "bg-black" : "bg-[#1b1b1b]"}
          >
            <td className="border-r font-bold">{index + 1}.</td>
            <td className="w-[50%] border-r relative">
              {row.name.toUpperCase()}
              <span className="text-[#29df2c6b] absolute left-2 hidden md:flex top-[9px]">
                ({row.team?.toUpperCase()})
              </span>
            </td>
            <td className="border-r">{row.score}</td>
            <td className="py-2">{row.fingers ?? "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function App() {
  return (
    <div className="mx-auto bg-black min-h-screen min-w-screen flex flex-col items-center justify-center flex-grow-1">
      <div className="absolute top-[10px] text-[50px] text-[#29df2c] font-extrabold">
        AGRP.DEV
      </div>
      <a
        href="https://10fastfingers.com/typing-test/english"
        target="_blank"
        className="text-white/90 absolute top-[80px] text-[20px] tracking-wide hover:text-[#29df2c] transition-all duration-300 animate-pulse"
      >
        10fastfingers.com
      </a>
      <div className="container text-center my-[120px]">
        <TyperTable />
      </div>
    </div>
  );
}

export default App;
