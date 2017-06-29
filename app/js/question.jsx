'use strict';

var Question = React.createClass({
  selectBigDataAnswer: function selectBigDataAnswer() {
    this.props.selectAnswer(IS_BIGDATA);
  },
  selectPokemonAnswer: function selectPokemonAnswer() {
    this.props.selectAnswer(IS_POKEMON);
  },
  render: function() {
    return (
      <div className="row row-centered row-vertical">
      <div className="vertical">
          <h1 className="question-name">Was ist <span className="text-uppercase">{this.props.question.name}?</span></h1>
          <br /><br />
          <div className="btn-group btn-group-lg">
            <button className="btn btn-primary" onClick={this.selectBigDataAnswer}>
              Big Data
            </button>
            <button className="btn btn-primary" onClick={this.selectPokemonAnswer}>
              Pokémon
            </button>
          </div>
      </div>
      </div>
    )
  }
});

