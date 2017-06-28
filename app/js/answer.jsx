'use strict';

var Answer = React.createClass({
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
      <div style={mystyle}>
      <div className={classes}>
          <h1 className="answer-name">
            <a className="external" href={url} target="_blank">{name}</a> ist {type}!
          </h1>
      </div>
      <div className={classes}>
          <div className="answer-picture"><img src={img} alt={name} className="img-responsive" width="300px"/></div>
      </div>
      <div className={classes}>
        <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4">
          <div className="text-justify">{text}</div>
        </div>
      </div>
      <div className={classes}>
          <div className="answer-next">
            <button className="btn btn-lg btn-primary answer-button-next" onClick={this.props.nextQuestion}>Weiter!</button>
          </div>
      </div>
      </div>
    )
  }
});

