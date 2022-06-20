const React = require('react');
const Def = require('../defalt');

const Index = (data) => {
    let placesFotmatted = data.places.map((place, i) => {
        return(
            <div key={i}>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name} />
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