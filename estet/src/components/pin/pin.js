import './pin.scss'
import {MapContainer,Marker,Popup,TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Link } from 'react-router-dom'

function Pin({item}){
    return(
        <Marker position={[item.latitude, item.longitude]}>
        <Popup>
          <div className='popupcontainer'>
            <img src={item.img} alt=''></img>
            <div className='textcontainer'>
                <Link to={`/${item.id}`}>{item.title}</Link>
                <span className='bed'>{item.bedroom} bedroom</span>
                <b>$ {item.price}</b>
            </div>
          </div>
        </Popup>
      </Marker>
    )
}

export default Pin


