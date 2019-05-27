import React, { Component } from 'react';
import * as matchActions from 'store/modules/match';
import { connect } from 'react-redux';
import MatchList from '../../components/match/MatchList';


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
			return (<MatchList matches={matchData.matches} />)
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
