 const Score = ({studentData}) => {
  return (
    <div className="Score">
      <h1>score</h1>
      {studentData.map((score, e) => {
        return (
          <div>
            <p>Date: {score.scores[e].date}</p>
            <p>Score: {score.scores[e].score}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Score;