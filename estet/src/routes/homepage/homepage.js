import { useContext } from "react"
import Searchbar from "../../components/searchbar/searchbar"
import "./homepage.scss"
import { AuthContext } from "../../context/Authcontext"

function Homepage(){

    const {currentUser} = useContext(AuthContext)
    console.log(currentUser)
    return(
        <div className="homepage">
            <div className="textcontainer">
                <div className="wrapper">
                    <h1 className="title">
                        Find real estet and get your dream place
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                    <Searchbar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years Of Experiance</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imagecontainer">
                <img src="/bg.png" alt=""></img>
            </div>
        </div>
    )
}

export default Homepage