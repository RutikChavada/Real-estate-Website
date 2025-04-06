import './filter.scss'

function Filter(){
    return(
        <div className='filter'>
            <h1>Search results for <b>London</b></h1>
            <div className='top'>
                <div className='item'>
                    <label htmlFor='city'>Location</label>
                    <input type='text' id='city' name='city' placeholder='City Location'></input>
                </div>
            </div>
            <div className='bottom'>
            <div className='item'>
                    <label htmlFor='type'>Type</label>
                    <select name='type' id='type'>
                        <option value="">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className='item'>
                    <label htmlFor='property'>Property</label>
                    <select name='property' id='property'>
                        <option value="">any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div className='item'>
                    <label htmlFor='minprice'>Min Price</label>
                    <input type='number' id='minprice' name='minprice' placeholder='any'></input>
                </div>
                <div className='item'>
                    <label htmlFor='city'>Max Price</label>
                    <input type='number' id='maxprice' name='maxprice' placeholder='any'></input>
                </div>
                <div className='item'>
                    <label htmlFor='city'>Badroom</label>
                    <input type='number' id='badroom' name='badroom' placeholder='any'></input>
                </div>
                <button>
                    <img src='/search.png'></img>
                </button>
            </div>
        </div>
    )
}

export default Filter