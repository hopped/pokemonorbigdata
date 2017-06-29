'use strict';

var Question = React.createClass({displayName: "Question",
  selectBigDataAnswer: function selectBigDataAnswer() {
    this.props.selectAnswer(IS_BIGDATA);
  },
  selectPokemonAnswer: function selectPokemonAnswer() {
    this.props.selectAnswer(IS_POKEMON);
  },
  render: function() {
    return (
      React.createElement("div", {className: "row row-centered row-vertical"}, 
      React.createElement("div", {className: "vertical"}, 
          React.createElement("h1", {className: "question-name"}, "Was ist ", React.createElement("span", {className: "text-uppercase"}, this.props.question.name, "?")), 
          React.createElement("br", null), React.createElement("br", null), 
          React.createElement("div", {className: "btn-group btn-group-lg"}, 
            React.createElement("button", {className: "btn btn-primary", onClick: this.selectBigDataAnswer}, 
              "Big Data"
            ), 
            React.createElement("button", {className: "btn btn-primary", onClick: this.selectPokemonAnswer}, 
              "Pokémon"
            )
          )
      )
      )
    )
  }
});

