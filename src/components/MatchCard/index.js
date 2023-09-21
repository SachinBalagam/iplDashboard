// Write your code here
import './index.css'

const MatchCard = props => {
  const {data} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = data
  const classAdd = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="each-list">
      <img src={competingTeamLogo} alt={competingTeam} className="logo" />
      <h3>{competingTeam}</h3>
      <p className="result">{result}</p>
      <p className={classAdd}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
