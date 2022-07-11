const React = require('react');
const Def = require('../defalt');

const Index = (data) => {
    // Mapping though each place in db
    let placesFotmatted = data.places.map((place) => {
        // Returning Jsx
        return(
            // A tag for click-able card
            // Start of card
            <a href={`/places/${place.id}`} className="place-link">
                {/* Card img */}
                <img src={place.pic} alt={place.name} className="place__img"/>
                {/* Start of card content */}
                {/* <div className="place__content"> */}
                    {/* Card title */}
                    <h3 className='card__title'>{place.name}</h3>
                    <p className='card__desc'>{place.cuisines}</p>
                    <p className='card__desc'>Located in {place.city}, {place.state}</p>
                {/* </div> */}
                {/* Start of card content */}
            </a>
            // End of card
        )
    })
    // Returning Jsx
    return(
        <Def>
            {/* Start of places page */}
            <main className='places-page'>
            {/* Start of header */}
                <header className="banner">
                    {/* Start of nav */}
                    <nav className='nav-container'>
                        {/* Nav container */}
                        <div className="nav-primary">
                            {/* Nav links */}
                            <ul className='nav-primary__links'>
                                <li className='nav-primary__link'><a href='#'>Sign in</a></li>
                                <li className='nav-primary__link'><a href='#' id='sign-up'>Sign up</a></li>
                            </ul>
                        </div>
                    </nav>
                    {/* End of nav */}
                    {/* Start of header content */}
                    <div className="banner-content">
                        {/* Header logo link */}
                        <a className='banner-content__link' href="/"><h1>Rest-Rant</h1></a>
                        <span id='banner-hl' className=' block'> Rave or Rant!</span>
                        {/* Header input */}
                        <input className='banner-content__input' type="text" placeholder='(not an actual search bar!)'/>
                        {/* Hrader button */}
                        <a className="banner-btn" href="/places/new">Add a new Place</a>
                    </div>
                    {/* End of header content */}
                </header>
                {/* End of Header */}
                {/* Start of places content */}
                <div className="places-content">
                    {/* Places title */}
                    <h1 className='places-header'>Popular Places</h1>
                    {/* Start of places container */}
                    <div className="places-container wrapper">
                        {/* Displaying variable  */}
                        {placesFotmatted}
                    </div>
                    {/* End of places container */}
                </div> 
                {/* End of places content */}
            </main>
            {/* End of places page */}

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
