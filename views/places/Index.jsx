const React = require('react');
const Def = require('../defalt');

const Index = (data) => {
    let placesFotmatted = data.places.map((place) => {
        return(
            <a href={`/places/${place.id}`} className="place-link">
                <div className='card'>
                
                    <img src={place.pic} alt={place.name} />
                        <h2> <a href={`/places/${place.id}`}>{place.name}</a></h2>
                    <p>{place.cuisines}</p>
                    <p>Located in {place.city}, {place.state}</p>
                </div>
            </a>
        )
    })
    return(
        <Def>
            <main className='places-page'>
                <div className="banner">
                {/* Start of nav */}
                    <nav className='nav-primary'>
                    {/* Nav container */}
                        <div className="nav-container">
                        {/* Nav links */}
                            <ul className='nav-primary_links'>
                                <li><a href="#">Sign in</a></li>
                                <li><a href="#" id='sign-up'>Sign up</a></li>
                            </ul>   
                        </div>
                    </nav>
                    {/* End of nav */}
                    <div className="banner-content">
                        <a href="/"><h1>Rest-Rant<span className='banner-hl block'> Rave or Rant!</span></h1></a>
                        <input type="text" placeholder='(not an actual search bar!)'/>
                        <a className="btn-primary" href="/places/new">Add a new Place</a>
                    </div>
                </div>
                <div className="places-content">
                <h1 className='places-header'>Popular Places</h1>
                <div className="places-container wrapper">
                    {placesFotmatted}
                </div>
            </div> 
            </main>
            

                {/* <section className='content-more wrapper'>
                    <div className="user-card">
                        <div className="user-card-img" id='join-img'></div>
                        <div className="user-card-desc">
                            <h2>Join Us</h2>
                            <p>Grow your business and reach new customers by partnering with us.</p>
                            <p className='user-card-link'>Sign up your store</p>
                        </div>
                    </div>
                    <div className="user-card">
                        <div className="user-card-img" id='app-img'></div>
                        <div className="user-card-desc">
                            <h2>Try the App</h2>
                            <p>Experience the best your neighborhood has to offer, all in one app.</p>
                            <p className='user-card-link'>Sign up your store</p>
                        </div>
                    </div>
                    <div className="user-card">
                        <div className="user-card-img" id='order-img'></div>
                        <div className="user-card-desc">
                            <h2>Order now</h2>
                            <p>Order ahead of time so you won't wait in line.</p>
                            <p className='user-card-link'>Sign up your store</p>
                        </div>
                    </div>
                </section> */}
        </Def>
    )
}
module.exports = Index;
