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
                    <a className='banner-content__link' href="/"><h1>Rest-Rant</h1></a>
                    <span id='banner-hl' className=' block'> Rave or Rant!</span>
                    {/* Header input */}
                    <input className='banner-content__input' type="text" placeholder='(not an actual search bar!)'/>
                    {/* Hrader button */}
                    <a href="/places" className="banner-btn">Places Page</a>
                </div>
            {/* End of header content */}
            </header>
            {/* End of header */}
            {/* Start of edit place  */}
            <main className='edit-place-container'>
                {/* Start of form contianer */}
                <div className="add-place-form-container">
                    {/* Edit page title */}
                    <h1 className='form-title'>Edit Place</h1>
                    {/* Start of edit place form */}
                    <form className='add-place-form' method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                        {/* Start of form group */}
                        <div className="form-group">
                            {/* Form label */}
                            <label className='details' htmlFor="name">Place Name</label>
                            {/* form input */}
                            <input className="place-form-input" type="text" id="name" name="name" value={data.place.name} required />
                        </div>
                        {/* End of form group */}
                        {/* Start of form group */}
                        <div className="form-group col-sm-4">
                            {/* Form label */}
                            <label className='details' htmlFor="founded">Founded</label>
                            {/* form input */}
                            <input className="place-form-input" id="founded" name="founded" value={data.place.founded} />
                        </div>
                        {/* End of form group */}
                        {/* Start of form group */}
                        <div className="form-group">
                            {/* Form label */}
                            <label className='details' htmlFor="pic">Place Picture</label>
                            {/* form input */}
                            <input className="place-form-input" type="url" id="pic" name="pic" value={data.place.pic} />
                        </div>
                        {/* End of form group */}
                        {/* Start of form group */}
                        <div className="form-group">
                            {/* Form label */}
                            <label className='details' htmlFor="city">City</label>
                            {/* form input */}
                            <input className="place-form-input" type="text" id="city" name="city" value={data.place.city} />
                        </div>
                        {/* End of form group */}
                        {/* Start of form group */}
                        <div className="form-group">
                            {/* Form label */}
                            <label className='details' htmlFor="state">State</label>
                            {/* form input */}
                            <input className="place-form-input" id="state" name="state" value={data.place.state} />
                        </div>
                        {/* End of form group */}
                        {/* Start of form group */}
                        <div className="form-group">
                            {/* Form label */}
                            <label className='details' htmlFor="cuisines">Cuisines</label>
                            {/* form input */}
                            <input className="place-form-input" type="text" id="cuisines" name="cuisines" required />
                        </div>
                        {/* End of form group */}
                            <input className="form-btn" type="submit" value="Update Place" />
                    </form>
                    {/* End of edit place form */}
                </div>
                {/* End of form group */}
            </main>
            {/* End of edit place  */}
        </Def>
    )
}

module.exports = edit_form;