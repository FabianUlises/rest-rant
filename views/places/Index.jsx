const React = require('react');
const Def = require('../defalt');

const Index = (data) => {
    let placesFotmatted = data.places.map((place, i) => {
        return(
            <div key={i}>
                <h2>{place.name}</h2>
                <p>{place.cuisines}</p>
                <img src={place.pic} alt={place.name} />
                <p>Located in {place.city}, {place.state}</p>
            </div>
        )
    })
    return(
        <Def>
            <main>
                <h1>Places index page</h1>
                {placesFotmatted}
            </main>
        </Def>
    )
}
module.exports = Index;