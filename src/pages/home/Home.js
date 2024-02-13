import Charts from '../../components/charts/Charts';
import FeatureInfo from '../../components/featureInfo/FeatureInfo';
import './home.css';
import {Userdata} from "../../../src/dummyData"
import WidgetLg from '../../components/widgetLG/WidgetLg';
import WidgetSm from '../../components/widgetSM/WidgetSm';

export default function Home() {
  return (
    <>
    <div className="home">
<FeatureInfo/>
<Charts data={Userdata} title={"User Analytics"} grid dataKey={"Active User"}/>
<div className="widget">

<WidgetSm />
<WidgetLg />
</div>
    </div>
      
    </>
  )
}
