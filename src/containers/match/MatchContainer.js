import React, { Component } from 'react';
import * as matchActions from 'store/modules/match';
import { connect } from 'react-redux';
import Match from '../../components/match/match';


class MatchContainer extends Component {
	componentDidMount() {
		const { summonerData } = this.props;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.summonerData !== this.props.summonerData) {
			const { summonerData, search } = this.props;
			search(summonerData.accountId);
		}
	}

	render() {
		const { matchData } = this.props;
		if (matchData.hasOwnProperty("matches")) {
			console.log(matchData.matches);
			return (
				<div>
					{
						matchData.matches.map((match, i) =>
							(<Match
								key={i}
								champion={match.champion}
								gameId={match.gameId}
								lane={match.lane}
								platformId={match.platformId}
								queue={match.queue}
								role={match.role}
								season={match.season}
								timestamp={match.timestamp}>
							</Match>))
					}
				</div>
			)
		} else {
			return (<div>No Data</div>);
		}
	}
}

const mapStateToProps = (state) => ({
	summonerData: state.summoner.data,
	matchData: state.match.data,
})
//props에 dispatch 함수 할당
const mapDispatchToProps = (dispatch) => ({
	search: (accountId) => dispatch(matchActions.search(accountId)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MatchContainer);
