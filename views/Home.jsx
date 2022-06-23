const React = require('react');
const Def = require('./defalt');


const Home = () => {
    return(
        <Def>
            <main>
                <div className="banner img-container">
                    <a href="/places"><h1>Rest-Rant</h1></a>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = Home;