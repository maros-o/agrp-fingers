import { ScoreData, scores, teamOptions } from "./data";

const TyperTable: React.FC = () => {
  const sortedScores = scores.sort((a, b) => b.score - a.score);

  return (
    <table className="min-w-full font-consolas text-white/90 text-[18px]">
      <thead className="text-[#29df2c] font-bold text-[36px] tracking-wide">
        <tr>
          <th className="py-2 px-4">RANK</th>
          <th className="py-2 px-4">TYPER</th>
          <th className="py-2 px-4">SCORE</th>
          <th className="py-2 px-4">FINGERS</th>
        </tr>
      </thead>
      <tbody className="border">
        {sortedScores.map((row: ScoreData, index: number) => (
          <tr
            key={index}
            className={index % 2 === 0 ? "bg-black" : "bg-[#1b1b1b]"}
          >
            <td className="py-2 px-4 w-[10%] text-center border-r font-bold">
              {index + 1}.
            </td>
            <td className="py-2 px-4 w-[50%] text-center border-r relative">
              {row.name.toUpperCase()}
              <span className="text-[#29df2c6b] absolute left-2">
                ({row.team?.toUpperCase()})
              </span>
            </td>
            <td
              className={`
                    py-2 px-4 w-[20%] text-center border-r`}
            >
              {row.score}
            </td>
            <td className="py-2 px-4 w-[20%] text-center">
              {row.fingers ?? "-"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TeamTable: React.FC = () => {
  const averageScores = teamOptions.map((team) => {
    const teamScores = scores.filter((score) => score.team === team);
    const teamScoreSum = teamScores.reduce((acc, cur) => acc + cur.score, 0);
    const teamAverageScore = teamScoreSum / teamScores.length || 0;

    return {
      name: team,
      score: teamAverageScore,
    };
  });

  const sortedTeams = averageScores.sort((a, b) => b.score - a.score);

  return (
    <table className="min-w-full font-consolas text-white/90 text-[18px]">
      <thead className="text-[#29df2c] font-bold text-[36px] tracking-wide">
        <tr>
          <th className="py-2 px-4">RANK</th>
          <th className="py-2 px-4">TEAM</th>
          <th className="py-2 px-4">AVG SCORE</th>
        </tr>
      </thead>
      <tbody className="border">
        {sortedTeams.map((row: ScoreData, index: number) => (
          <tr
            key={index}
            className={index % 2 === 0 ? "bg-black" : "bg-[#1b1b1b]"}
          >
            <td className="py-2 px-4 w-[10%] text-center border-r font-bold">
              {index + 1}.
            </td>
            <td className="py-2 px-4 w-[50%] text-center border-r relative">
              {row.name.toUpperCase()}
            </td>
            <td
              className={`
                    py-2 px-4 w-[20%] text-center border-r`}
            >
              {row.score}
            </td>
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
      <div className="container text-center my-[100px]">
        <TyperTable />
      </div>
      <div className="container text-center mb-[100px]">
        <TeamTable />
      </div>
    </div>
  );
}

export default App;
