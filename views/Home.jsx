const React = require('react');
const Def = require('./defalt');


const Home = () => {
    return(
        <Def>
            <main>
                <a href="/places"><h1>Rest-Rant</h1></a>
                <div className="banner-img-container">
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = Home;