const React = require('react');
const Def = require('./../defalt');

// Function to show comments
const show = (data) => {
  // Default comments content
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  );
  // Default rating content
  let rating = (
    <h3 className='inactive'>
      Not Yet rated
    </h3>
  );
  // Checking if data's comments isnt empty
  // If it isn't continue
  if (data.place.comments.length) {
    // Ratings
    // Calculating sum of ratings
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars;
    }, 0);
    // Removing decimal
    let averageRating = Math.round(sumRatings / data.place.comments.length);
    // Default Stars content
    let stars = '';
    // Looping for every star in averagerating
    for (let i = 0; i < averageRating; i++) {
      // Adding a star as content
      stars += '⭐️';
    };
    // If there is comments the ratings variable will update its content
    rating = (
      <h3>
        {/* Will render stars */}
        {stars} stars
      </h3>
    );
    // Comments
    // Looping through the comments
    comments = data.place.comments.map(c => {
      // Returning Jsx
      return (
        // Start of comment
        <div className="border">
          {/* Start of comment content */}
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          {/* End of comment content */}
          {/* Start of comment button */}
          <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
            <input type="submit" value="Delete Comment" className='form-btn' />
          </form>
          {/* End of comment button */}
        </div>
        // End of comments
      );
    });
  };
  // 
  return (
    // Returning Jsx
    <Def>
      {/* Start of Header */}
      <header className="banner">
        {/* Start of nav */}
        <nav className='nav-container'>
          {/* Nav container */}
          <div className="nav-primary">
            {/* Nav links */}
            <ul className='nav-primary__links'>
              <li className='nav-primary__link'><a href='#'>Sign in</a></li>
              <li className='nav-primary__link'><a href='#' id='sign-up'>Sign up</a></li>
            </ul>
          </div>
        </nav>
        {/* End of nav */}
        {/* Start of header content */}
        <div className="banner-content">
          {/* Header logo link */}
          <a className='banner-content__link' href="/"><h1>Rest-Rant</h1></a>
          <span id='banner-hl' className=' block'> Rave or Rant!</span>
          {/* Header input */}
          <input className='banner-content__input' type="text" placeholder='(not an actual search bar!)' />
          {/* Hrader button */}
          <a href="/places" className='banner-btn'>Places Page</a>
        </div>
        {/* End of header content */}
      </header>
      {/* End of Header */}


      {/* Start of Show container */}
      <main className='place-container'>
        {/* Start of card */}
        <section className="place-container__card">
          {/* Card img */}
          <div className="rating-img">
            <img src={data.place.pic} alt={data.place.name} />
          </div>
          {/* Start of card details */}
          <div className="rating-details">
            <h3>Located in {data.place.city}, {data.place.state}</h3>
            <h4>Serving {data.place.cuisines}</h4>
          </div>
          {/* End of card details */}
        </section>
        {/* End of card */}
        {/* Start of rating section */}
        <section className="rating-section">
          {/* Rating Content */}
          <div className="rating-info">
            <h1>{data.place.showEstablished()}</h1>
          </div>
          {/* Start of rating stars */}
          <div className="rating-stars">
            <h2 className='rating-stars-title'>Rating</h2>
            {/* Returning variable */}
            {rating}
          </div>
          {/* End of rating stars */}
        </section>
        {/* End of rating section */}


      </main>
      {/* End of Show container */}
      {/* Start of comments section */}
      <section className="comments-section">
        <h2 className='comments-title'>Comments</h2>
        <hr />
        {/* Start of comment content */}
        <div className="current-comments">
          {/* Returning variable */}
          {comments}
        </div>
        {/* End of comment content */}
        <hr />
        {/* Start of form section */}
        <div className="comments-section-form">
          {/* Form title */}
          <h2 className='comments-form-title'>Got Your Own Rant or Rave?</h2>
          {/* Start of form container */}
          <div className="comment-form-container">
            {/* Start of form */}
            <form action={`/places/${data.place.id}/comment`} method="POST">
              {/* Form group */}
              <div className="row">
                {/* Start of form group */}
                <div className="form-group col-sm-12">
                  <label htmlFor="content">Content</label>
                  <textarea id="content" name="content" className="form-control"></textarea>
                </div>
                {/* End of form group */}
              </div>
              <div className="row">
                {/* Start of form group */}
                <div className="form-group col-sm-4">
                  <label htmlFor="author">Author</label>
                  <input id="author" name="author" className="form-control" />
                </div>
                {/* End of form group */}
                {/* Start of form group */}
                <div className="form-group col-sm-4">
                  <label htmlFor="stars">Star Rating</label>
                  <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                </div>
                {/* End of form group */}
                {/* Start of form group */}
                <div className="form-group col-sm-2">
                  <label htmlFor="rant">Rant?</label>
                  <input type="checkbox" id="rant" name="rant" className="form-control" />
                </div>
                {/* End of form group */}
              </div>
              {/* Form button */}
              <input type="submit" className="form-btn" value="Add Comment" />
            </form>
            {/* End of form */}
            {/* Start of form buttons */}
            <div className="place-btn-container">
              {/* Edit button */}
              <a className='form-btn' href={`/places/${data.place.id}/edit`}>Edit</a>
              {/* Delete button */}
              <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                <button type='submit' className='form-btn'>Delete</button>
              </form>
            </div>
            {/* End of form buttons */}
          </div>
          {/* End of form container */}
        </div>
        {/* End of form section */}
      </section>
      {/* End of comments section */}
    </Def>
  );
};
module.exports = show;