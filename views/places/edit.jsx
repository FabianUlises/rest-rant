const React = require('react');
const Def = require('./../defalt');

const edit_form = (data) => {
    // Returning Jsx
    return(
        <Def>
            {/* Start of header */}
            <header className="edit-banner">
            {/* Start of header content */}
            <div className="banner-content">
                {/* Header logo link */}
                <a className='banner-content__link' href="/"><h1>Rest-Rant<span className='banner-hl block'> Rave or Rant!</span></h1></a>
                {/* Header input */}
                <input className='banner-content__input' type="text" placeholder='(not an actual search bar!)'/>
                {/* Hrader button */}
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </div>
            {/* End of header content */}
            </header>
            {/* End of header */}
            {/* Start of edit place  */}
            <main className='edit-place-container'>
                {/* Edit page title */}
                <h1>Edit a Place</h1>
                {/* Start of edit place form */}
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    {/* Start of form group */}
                    <div className="form-group">
                        {/* Form label */}
                        <label htmlFor="name">Place Name</label>
                        {/* form input */}
                        <input className="form-control" type="text" id="name" name="name" value={data.place.name} required />
                    </div>
                    {/* End of form group */}
                    {/* Start of form group */}
                    <div className="form-group col-sm-4">
                        {/* Form label */}
                        <label htmlFor="founded">Founded</label>
                        {/* form input */}
                        <input className="form-control" id="founded" name="founded" value={data.place.founded} />
                    </div>
                    {/* End of form group */}
                    {/* Start of form group */}
                    <div className="form-group">
                        {/* Form label */}
                        <label htmlFor="pic">Place Picture</label>
                        {/* form input */}
                        <input className="form-control" type="url" id="pic" name="pic" value={data.place.pic} />
                    </div>
                    {/* End of form group */}
                    {/* Start of form group */}
                    <div className="form-group">
                        {/* Form label */}
                        <label htmlFor="city">City</label>
                        {/* form input */}
                        <input className="form-control" type="text" id="city" name="city" value={data.place.city} />
                    </div>
                    {/* End of form group */}
                    {/* Start of form group */}
                    <div className="form-group">
                        {/* Form label */}
                        <label htmlFor="state">State</label>
                        {/* form input */}
                        <input className="form-control" id="state" name="state" value={data.place.state} />
                    </div>
                    {/* End of form group */}
                    {/* Start of form group */}
                    <div className="form-group">
                        {/* Form label */}
                        <label htmlFor="cuisines">Cuisines</label>
                        {/* form input */}
                        <input className="form-control" type="text" id="cuisines" name="cuisines" required />
                    </div>
                    {/* End of form group */}
                        <input className="formBtn" type="submit" value="Update Place" />
                </form>
                {/* End of edit place form */}
            </main>
            {/* End of edit place  */}
        </Def>
    )
}

module.exports = edit_form;