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
        <main className='add-place'>
          <h1>Add a New Place</h1>
          {message}
          <form method="POST" action="/places">
            <div className="form-group">
              <label htmlFor="name">Place Name</label>
              <input className="form-control" type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="pic">Place Picture</label>
              <input className="form-control" id="pic" name="pic" />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input className="form-control" id="city" name="city" />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input className="form-control" id="state" name="state" />
            </div>
            <div className="form-group">
              <label htmlFor="cuisines">Cuisines</label>
              <input className="form-control" type="text" id="cuisines" name="cuisines" required />
            </div>
            <div className="form-group">
              <label htmlFor="founded">Founded Year</label>
              <input type='number' className='form-control' id='founded' name='founded' value={new Date().getFullYear()}/>
            </div>
              <input className="formBtn" type="submit" value="Add Place" />
          </form>
        </main>
      </Def>
  )
}

module.exports = new_form



