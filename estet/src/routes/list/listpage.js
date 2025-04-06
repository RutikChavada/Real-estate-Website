import Card from "../../components/card/card";
import Filter from "../../components/filter/filter";
import Map from "../../components/map/map";
import { listData } from "../../lib/dummydata";
import "./listpage.scss";

function Listpage(){
    const data = listData
    return(
        <div className="listpage">
            <div className="listcontainer">
                <div className="wrapper">
                    <Filter/>
                    {data.map(item => (
                        <Card key={item.id} item = {item}/>
                    ))}
                </div>
            </div>
            <div className="mapcontainer"><Map items={data}/></div>
        </div>
    )
}

export default Listpage