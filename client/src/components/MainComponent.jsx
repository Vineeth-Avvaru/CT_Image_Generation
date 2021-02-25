import React from "react";
import SampleGeneration from "./SampleGenerationComponent";
import SampleCollection from "./SampleCollectionComponent";
import DatabaseStatistics from "./DatabaseStatisticsComponent";
import Enrichment from "./EnrichmentComponent";
import "./MainComponent.css";

function Main() {
  return (
    <div className="main-container">
      <div className="top-container">
        <div className="sample-generation-container temp-style">
          <SampleGeneration />
        </div>
        <div className="sample-collection-container temp-style">
          <SampleCollection />
        </div>
        <div className="database-statistics-container temp-style">
          <DatabaseStatistics />
        </div>
      </div>
      <div className="bottom-container">
        <div className="enrichment-container temp-style">
          <Enrichment />
        </div>
      </div>
    </div>
  );
}

export default Main;
