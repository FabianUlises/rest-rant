const React = require('react');
const Def = require('./defalt');
const Home = () => {
    return(
        // Retuning jsx
        <Def>
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
                    {/* <a href="/places" className="banner-btn">Places Page</a> */}
                </div>
                {/* End of header content */}
            </header>
            {/* End of Header */}
            {/* Start of home page */}
            <main className='home-page'>
                {/* Start of home page content */}
                <div className="home-page__desc">
                    <h1 className='home-page__header'>Welcome</h1>
                    <p className='home-page__conent'>This website was made using Nodejs, Expressjs, & MongoDB for back-end operations and React express JSX for server-side rendering</p>
                </div>
                {/* End of home page content */}
            </main>
            {/* End of home page */}
        </Def>
    )
}

module.exports = Home;