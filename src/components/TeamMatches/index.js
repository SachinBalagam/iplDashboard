// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchDetails: {}, isLoading: true}

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
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }
    this.setState({teamMatchDetails: formattedData, isLoading: false})
    console.log(formattedData)
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {teamMatchDetails, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchDetails
    return (
      <div className={`container ${id}`}>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="card">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <h1 className="heading">Latest Matches</h1>
            <LatestMatch latestMatch={latestMatchDetails} />
            <ul className="recentMatchesList">
              {recentMatches.map(each => (
                <MatchCard key={each.id} data={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
