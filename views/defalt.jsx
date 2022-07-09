const React = require('react');
// Default Html layout with nav
const Def = (html) => {
    return(
        // Start of html layout
        <html lang='en'>
            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
                <meta name="description" content="A portfolio for Fabian Carrillo a Full-Stack Developer." />
                <title>Title</title>
                <link rel="stylesheet" href="/main.css" />
                <script src="https://kit.fontawesome.com/bc3d8292c6.js" crossorigin="anonymous" defer></script>
            </head>
            <body>
                <div>
                    {html.children}
                </div>
            </body>
        </html>
    )
}

module.exports = Def;