import React, { Component } from "react";
import "./Tour.scss";

class Tour extends Component {
  constructor() {
    super();
    this.state = { showinfo: false, removeTour: false };
    this.toggleInfo = this.toggleInfo.bind(this);
    this.removeTour = this.removeTour.bind(this);
  }
  removeTour() {
    const value = this.state.removeTour;
    this.setState({ removeTour: !value });
  }
  toggleInfo() {
    const toggle = this.state.showinfo;
    this.setState({ showinfo: !toggle });
  }
  render() {
    const touritem = this.props.touritem;
    return this.state.removeTour ? null : (
      <article className="tour">
        <div className="image-container">
          <img src={touritem.img} alt="immage" />
          <span className="close-btn">
            <i
              className="fa fa-window-close"
              aria-hidden="true"
              onClick={this.removeTour}
            ></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{touritem.city}</h3>
          <h5>{touritem.name} </h5>
          <h6>
            info
            <span>
              <i
                className="fa fa-caret-square-o-down"
                aria-hidden="true"
                onClick={this.toggleInfo}
              ></i>
            </span>
          </h6>
          {this.state.showinfo ? <p>{touritem.info}</p> : null}
        </div>
      </article>
    );
  }
}

export default Tour;
