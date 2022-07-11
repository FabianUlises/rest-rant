const React = require('react');
const Def = require('../defalt');

function new_form (data) {
  let message = '';
  if(data.message) {
    message = (
      <h4 className='alert-danger'>{data.message}</h4>
    )
  }
  return (
    // Retuning jsx
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
            <a className="banner-btn" href="/places">Places Page</a>
          </div>
          {/* End of header content */}
        </header>
        {/* End of header */}
        {/* Start of new place page */}
        <main className='add-place'>
          {/* Display error message */}
          {message}
          {/* Start of form contianer */}
          <div className="add-place-form-container">
            {/* Title */}
            <h1 className='form-title'>Add a New Place</h1>
            {/* Start of form */}
            <form className='add-place-form' method="POST" action="/places">
              {/* Start o form group */}
              <div className="form-group">
                <label class="details" htmlFor="name">Place Name</label>
                <input className="place-form-input" type="text" id="name" name="name" required />
              </div>
              {/* End of form group */}
              {/* Start of form group */}
              <div className="form-group">
                <label class="details" htmlFor="pic">Place Picture</label>
                <input className="place-form-input" id="pic" name="pic" />
              </div>
              {/* End of form group */}
              {/* Start of form group */}
              <div className="form-group">
                <label class="details" htmlFor="city">City</label>
                <input className="place-form-input" id="city" name="city" />
              </div>
              {/* End of form group */}
              {/* Start of form group */}
              <div className="form-group">
                <label class="details" htmlFor="state">State</label>
                <input className="place-form-input" id="state" name="state" />
              </div>
              {/* End of form group */}
              {/* Start of form group */}
              <div className="form-group">
                <label class="details" htmlFor="cuisines">Cuisines</label>
                <input className="place-form-input" type="text" id="cuisines" name="cuisines" required />
              </div>
              {/* End of form group */}
              {/* Start of form group */}
              <div className="form-group">
                <label class="details" htmlFor="founded">Founded Year</label>
                <input type='number' className='place-form-input' id='founded' name='founded' value={new Date().getFullYear()}/>
              </div>
              {/* End of form group */}
              {/* Form button */}
                <input className="form-btn" type="submit" value="Add Place" />
            </form>
            {/* End of form */}
          </div>
          {/* End of form contianer */}
        </main>
        {/* End of new place page */}
      </Def>
  )
}

module.exports = new_form



