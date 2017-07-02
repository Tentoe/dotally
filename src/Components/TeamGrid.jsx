import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './TeamGrid.css';

import PlayerCard from './PlayerCard/';

import { fetchHeroes } from '../actions';
import { readServerLog } from '../actions/readServerLog';


class TeamGrid extends React.Component {


  componentDidMount() {
    this.props.dispatch(fetchHeroes());
    this.props.dispatch(readServerLog(0));
  }

  render() {
    const slotIDs = _.times(10);
    const radiantPlayers = _.slice(slotIDs, 0, 5);
    const direPlayers = _.slice(slotIDs, 5, 10);
    return (
      <div className="container-fluid">

        <div className="row" >
          <div className="col-lg-2">Team Stats</div>
          {radiantPlayers.map(id => (<PlayerCard key={id} id={id} />))}
        </div>
        <div className="row" >
          <div className="col-lg-2">{'stuff'}</div>
          {direPlayers.map(id => (<PlayerCard key={id} id={id} />))}
        </div>
      </div>
    );
  }


}
TeamGrid.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(TeamGrid);
