'use strict';

var Answer = React.createClass({displayName: "Answer",
  render: function() {
    var classes = classNames({
      'row': true,
      'row-centered': true
    });
    var bclasses = classNames({
      'col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3': true
    });
    var img = "./img/" + this.props.question.img;
    var name = this.props.question.name;
    var url = this.props.question.url;
    var text = this.props.question.text;
    var type = this.props.question.type === IS_BIGDATA ? 'Big Data' : 'Pokémon';

    document.body.classList.toggle('bg-success', this.props.isAnswerCorrect)
    document.body.classList.toggle('bg-danger', !this.props.isAnswerCorrect)

    var mystyle = {
      'padding-top': '60px'
    };
    return (
      React.createElement("div", {style: mystyle}, 
      React.createElement("div", {className: classes}, 
          React.createElement("h1", {className: "answer-name"}, 
            React.createElement("a", {className: "external", href: url, target: "_blank"}, name), " ist ", type, "!"
          )
      ), 
      React.createElement("div", {className: classes}, 
          React.createElement("div", {className: "answer-picture"}, React.createElement("img", {src: img, alt: name, className: "img-responsive", width: "300px"}))
      ), 
      React.createElement("div", {className: classes}, 
        React.createElement("div", {className: "col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4"}, 
          React.createElement("div", {className: "text-justify"}, text)
        )
      ), 
      React.createElement("div", {className: classes}, 
          React.createElement("div", {className: "answer-next"}, 
            React.createElement("button", {className: "btn btn-lg btn-primary answer-button-next", onClick: this.props.nextQuestion}, "Weiter!")
          )
      )
      )
    )
  }
});

