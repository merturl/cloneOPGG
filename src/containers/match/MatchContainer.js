import React, { Component } from 'react';
import * as matchlistActions from 'store/modules/matchlists';
import * as matchActions from 'store/modules/match';
import { connect } from 'react-redux';
import MatchList from '../../components/match/MatchList';


class MatchContainer extends Component {
	componentDidMount() {
		const { summonerData } = this.props;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.summonerData !== this.props.summonerData) {
			const { summonerData, searchMatchList } = this.props;
			searchMatchList(summonerData.accountId);
		}
		if (prevProps.matchlistsData.startIndex !== this.props.matchlistsData.startIndex) {
			const { matchlistsData } = this.props;
			const { matches } = matchlistsData;
			matches.map((match)=>{
				this.fetchMatch(match.gameId);
			});
		}
	}

	fetchMatch(matchId) {
		const { searchMatch } = this.props;
		searchMatch(matchId);
	}

	render() {
		const { matchlistsData, matchData } = this.props;
		if (matchlistsData.hasOwnProperty("matches")) {
			return (<MatchList matches={matchlistsData.matches} matchData={matchData.matches} />)
		} else {
			return (<div>No Data</div>);
		}
	}
}

const mapStateToProps = (state) => ({
	summonerData: state.summoner.data,
	matchlistsData: state.matchlists.data,
	matchData: state.match.matches,
})
//props에 dispatch 함수 할당
const mapDispatchToProps = (dispatch) => ({
	searchMatchList: (accountId) => dispatch(matchlistActions.searchMatchList(accountId)),
	searchMatch: (matchId) => dispatch(matchActions.searchMatch(matchId)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MatchContainer);
