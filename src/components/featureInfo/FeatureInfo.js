import "./featureInfo.css";

export default function FeatureInfo() {
  return (
    <>
      <div className="featureInfo">
        <div className="featureInfoItem">
          <span className="featureTitle">Revanue</span>
          <div className="featureReavenuecontan">
            <span className="featureMoney">$2.58</span>
            <span className="featureMonyRate">
              -11.9 <i class="fa-solid fa-arrow-down featureicon negative"></i>
            </span>
          </div>
          <span className="featureSub">Compare to last month</span>
        </div>
        <div className="featureInfoItem">
          <span className="featureTitle">Sales</span>
          <div className="featureReavenuecontan">
            <span className="featureMoney">$22.58</span>
            <span className="featureMonyRate">
              -21.9 <i class="fa-solid fa-arrow-down featureicon negative"></i>
            </span>
          </div>
          <span className="featureSub">Compare to last month</span>
        </div>
        <div className="featureInfoItem">
          <span className="featureTitle">Cost</span>
          <div className="featureReavenuecontan">
            <span className="featureMoney">$21.30</span>
            <span className="featureMonyRate">
              +23.49 <i class="fa-solid fa-arrow-up featureicon "></i>
            </span>
          </div>
          <span className="featureSub">Compare to last month</span>
        </div>
      </div>
    </>
  );
}
