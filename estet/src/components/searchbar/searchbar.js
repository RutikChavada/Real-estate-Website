import { useState } from "react";
import "./searchbar.scss";

const types = ["buy", "rent"];

function Searchbar() {
    const [query, setquery] = useState({
        type: "buy",
        location: "",
        minprice: 0,
        maxprice: 0,
    });

    const switchtype = (val) => {
        setquery((prev) => ({ ...prev, type: val }));
    };

    return (
        <div className="searchbar">
            <div className="type">
                {types.map((type) => (
                    <button 
                        key={type} 
                        onClick={() => switchtype(type)} 
                        className={query.type === type ? "active" : ""}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <form>
                <input type="text" name="location" placeholder="City Location" />
                <input type="number" name="minprice" min={0} max={10000000} placeholder="Min Price" />
                <input type="number" name="maxprice" min={0} max={10000000} placeholder="Max Price" />
                <button>
                    <img src="./search.png" alt="" />
                </button>
            </form>
        </div>
    );
}

export default Searchbar;
