const React = require('react');
const Def = require('./defalt');


const Home = () => {
    return(
        <Def>
            <main>
                <div className="banner">
                    {/* Start of nav */}
                    <nav className='nav-primary'>
                        {/* Nav container */}
                        <div className="nav-container">
                            {/* Nav links */}
                            <ul className='nav-primary_links'>
                                <li><a>Sign in</a></li>
                                <li><a id='sign-up'>Sign up</a></li>
                            </ul>
                        </div>
                    </nav>
                    {/* End of nav */}
                    <div className="banner-content">
                        <a href="/"><h1>Rest-Rant<span className='banner-hl block'> Rave or Rant!</span></h1></a>
                        <input type="text" placeholder='(not an actual search bar!)'/>
                        <a href="/places">
                            <button className="btn-primary">Places Page</button>
                        </a>
                    </div>
                </div>
                <div className="desc">
                    <h1>Welcome</h1>
                    <p>This website was made using Nodejs, Expressjs, & MongoDB for back-end operations and React express JSX for server-side rendering</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = Home;