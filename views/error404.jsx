const React = require('react');
const Def = require('./defalt');

const error404 = () => {
    // Returning Jsx
    return(        
        <Def>
            {/* Start of error page */}
            <main className='error-page'>
                <h1 className='error-page-title'>404: page not found</h1>
            </main>
            {/* End of error page */}
        </Def>
    )
};
module.exports = error404;