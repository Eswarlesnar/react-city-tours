import React, { Component } from "react";
import "./Tourlist.scss";
import Tour from "../Tours/Tour";
import { tourData } from "../tourData";

class Tourlist extends Component {
  constructor() {
    super();
    this.state = { tourdata: tourData };
    console.log(this.state.tourdata);
  }
  render() {
    const tourdata = this.state.tourdata;
    return (
      <section className="tourlist">
        {tourdata.map((tour) => (
          <Tour key={tour.id} touritem={tour} />
        ))}
      </section>
    );
  }
}

export default Tourlist;
