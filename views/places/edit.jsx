const React = require('react');
const Def = require('./../defalt');

const edit_form = (data) => {
    return(
        <Def>
            <div className="edit-banner">
                <div className="banner-content">
                    <a href="/"><h1>Rest-Rant<span className='banner-hl block'> Rave or Rant!</span></h1></a>
                    <input type="text" placeholder='(not an actual search bar!)'/>
                    <a href="/places">
                        <button className="btn-primary">Places Page</button>
                    </a>
                </div>
            </div>
            <main className='edit-place-container'>
                <h1>Edit a Place</h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" type="text" id="name" name="name" value={data.place.name} required />
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="founded">Founded</label>
                        <input className="form-control" id="founded" name="founded" value={data.place.founded} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic" value={data.place.pic} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" type="text" id="city" name="city" value={data.place.city} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" value={data.place.state} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" type="text" id="cuisines" name="cuisines" required />
                    </div>
                        <input className="formBtn" type="submit" value="Update Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form;