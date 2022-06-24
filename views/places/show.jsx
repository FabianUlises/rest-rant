const React = require('react');
const Def = require('./../defalt');

const show = (data) => {
    return(
        <Def>
            <main>
                <div className="place-image">
                    <img src={data.place.pic} alt={data.place.name} />
                </div>
                <div className="place-desc">
                    <h2>{data.place.name}</h2>
                    <h4>{data.place.cuisines}</h4>
                    <div className="place-location">
                        <p>{data.place.city}, {data.place.state}</p>
                    </div>
                </div>
                <div className="place-btn-container">
                    <a className='btn btn-warning' href={`/places/${data.id}/edit`}>Edit</a>
                    <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                        <button type='submit' className='btn btn-danger'>Delete</button>
                    </form>
                </div>
            </main>
        </Def>
    )
}
module.exports = show;