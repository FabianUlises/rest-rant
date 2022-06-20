const React = require('react');
const Def = require('./defalt');

const error404 = () => {
    return(        
        <Def>
            <main>
                <h1>404: page not found</h1>
            </main>
        </Def>
    )
};
module.exports = error404;