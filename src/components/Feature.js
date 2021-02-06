import React from "react";
import classnames from "classnames";
import FeatureImg from "./FeatureImg";

const Feature = ({ imageUrl, title, description }) => (
  <div className={classnames("col col--4")}>
    {imageUrl && (
      <div className="text--center">
        <FeatureImg src={imageUrl} alt={title} />
      </div>
    )}
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default React.memo(Feature);
