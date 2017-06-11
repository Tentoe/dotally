import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Popover } from 'react-bootstrap';

import './PlayerCard.css';

import PlayerInfo from './PlayerInfo';
import CustomOverlayTrigger from './CustomOverlayTrigger';
import PerformanceInfo from './PerformanceInfo';
import MostPlayedTable from './MostPlayedTable';
import BehavioralInfo from './BehavioralInfo';
import Comment from './Comment';
import Loading from '../Loading';

const mapStateToProps = (state, props) => ({
  summary: state.summaries.find(item => item.steamid === state.players[props.id].steamID64),
});

function PlayerCard(props) {
  const { summary } = props;
  if (summary) {
    const namePopover = (
      <Popover id="playernamePopover" title="Player's Name">
        <div className="text-center"><strong>{summary.personaname}</strong></div>
        <div className="text-center">{summary.realname}</div>
      </Popover>
  );
    return (
      <div className="col-md-2 player-card-outer">
        <div className="player-card-inner border-item">
          <div>
            <CustomOverlayTrigger overlay={namePopover} >
              <div className="player-card-name header-size flex-item overflow-item">
                {summary.personaname}
              </div>
            </CustomOverlayTrigger>
            <PlayerInfo
              name={summary.personaname}
              realname={summary.realname}
              avatarUrl={summary.avatarfull}
              countryCode={summary.loccountrycode}
              timecreated={summary.timecreated}
              friendCount={12}
            />
            <PerformanceInfo />
            <MostPlayedTable />
            <BehavioralInfo />
            <Comment />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="col-md-2 player-card-outer">
      <div className="player-card-inner border-item">
        <Loading />
      </div>
    </div>);
}
PlayerCard.propTypes = {
  id: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
};

export default connect(mapStateToProps)(PlayerCard);