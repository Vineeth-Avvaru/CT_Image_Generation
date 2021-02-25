import React from "react";
import CTImage from "./CTImageComponent";
import "./EnrichmentComponent.css";

class Enrichment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [{}, {}, {}, {}, {}],
    };
  }
  render() {
    const CTImages = this.state.images.map(() => {
      return <CTImage />;
    });
    return (
      <div>
        <h3>Sample Neighbourhood Enrichment</h3>
        <div className="image-list">{CTImages}</div>
      </div>
    );
  }
}

export default Enrichment;
