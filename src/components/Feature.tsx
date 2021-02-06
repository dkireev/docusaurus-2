import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import classnames from "classnames";
import FeatureImg from "./FeatureImg";

const Feature = ({ imageUrl, title, description }) => {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4")}>
      {imgUrl && (
        <div className="text--center">
          <FeatureImg src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default React.memo(Feature);
