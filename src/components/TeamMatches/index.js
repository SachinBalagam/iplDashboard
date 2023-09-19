// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchDetails: {}}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getFormattedData = data => ({
    id: data.id,
    umpires: data.umpires,
    result: data.result,
    date: data.date,
    venue: data.venue,
    manOfTheMatch: data.man_of_the_match,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getFormattedData(data.latest_match_details),
    }
    this.setState({teamMatchDetails: formattedData})
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {teamMatchDetails} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamMatchDetails
    console.log(latestMatchDetails)
    return (
      <div className={`container ${id}`}>
        <img src={teamBannerUrl} alt="team banner" />
        <h1>Latest Matches</h1>
        <LatestMatch
          key={latestMatchDetails.id}
          latestMatchDetails={latestMatchDetails}
        />
      </div>
    )
  }
}

export default TeamMatches
