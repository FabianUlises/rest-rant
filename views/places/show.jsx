const React = require('react');
const Def = require('./../defalt');

const show = (data) => {
    return(
        <Def>
            <main>
                <div className="place-image">
                    <img src={data.place.pic} alt={data.place.name} />
                    <h3>Located in {data.place.city}, {data.place.state}</h3>
                </div>
                <div className="place-desc">
                    <h3>{data.place.showEstablished()}</h3>
                    <h4>Serving {data.place.cuisines}</h4>
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