'use strict';

var EndScreen = React.createClass({
  render: function() {
    document.body.classList.toggle('bg-danger', false)
    document.body.classList.toggle('bg-success', false)

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
    return (
      <div className="row row-centered row-vertical">
      <div className="vertical endscreen">
        <h1 className="endscreen-title">Glückwunsch! Du hast {percent}% korrekt!</h1>
        <div className="progress">
          <div className={classes} style={style}>
            <span className="sr-only">20% Complete</span>
          </div>
        </div>
        <br/><br/>
        <a class="internal" href="http://www.hlrs.de/bigdata">
          <img src="img/catalyst.png" class="catalyst-image img-responsive" width="400" />
        </a>
      </div>
      </div>
    )
  }
});






