// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatch
  return (
    <div className="sub-card">
      <div className="division1">
        <h1>{competingTeam}</h1>
        <h1>{date}</h1>
        <h1>{venue}</h1>
        <h1>{result}</h1>
      </div>
      <img src={competingTeamLogo} alt="hello" className="teams-logo" />
      <div className="division2">
        <p className="content-titles">First Innings</p>
        <h1>{firstInnings}</h1>
        <p className="content-titles">Second Innings</p>
        <h1>{secondInnings}</h1>
        <p className="content-titles">Man of the Match</p>
        <h1>{manOfTheMatch}</h1>
        <p className="content-titles">Umpires</p>
        <h1>{umpires}</h1>
      </div>
    </div>
  )
}

export default LatestMatch
