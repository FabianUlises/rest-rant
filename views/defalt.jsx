const React = require('react');
// Default Html layout with nav
const Def = (html) => {
    return(
        // Start of html layout
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="/main.css" />
            </head>
            <body>
                {/* Start of nav */}
                <nav className='nav-primary'>
                    {/* Nav container */}
                    <div className="nav-container">
                        {/* Nav logo */}
                        <div className="logo">logo</div>
                        {/* Nav links */}
                        <ul className='nav-primary_links'>
                            <li><a href="/">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                {/* End of nav */}
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def;