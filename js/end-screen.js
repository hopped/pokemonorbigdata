'use strict';

var EndScreen = React.createClass({displayName: "EndScreen",
  render: function() {
    var percent = Math.round(this.props.correctAnswers / this.props.questionList.length * 100);
    var classes = classNames({
      'progress-bar': true,
      'progress-bar-danger': percent < 20,
      'progress-bar-warning': percent >= 20 && percent < 50,
      'progress-bar-info': percent >= 50 && percent < 80,
      'progress-bar-success': percent >= 80
    });
    var style = {
      width: percent + '%'
    };
    var mystyle = {
      'padding-top': '60px'
    };
    return (
      React.createElement("div", {style: mystyle, className: "endscreen"}, 
        React.createElement("h1", {className: "endscreen-title"}, "Glückwunsch! Du hast ", percent, "% korrekt!"), 
        React.createElement("div", {className: "progress"}, 
          React.createElement("div", {className: classes, style: style}, 
            React.createElement("span", {className: "sr-only"}, "20% Complete")
          )
        )
      )
    )
  }
});






