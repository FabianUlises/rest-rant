## MERN Stack app using CRUD operations

#### Add your favorite restaurants to review and leave comments
<h5>Tech stack used:</h5>
<ul>
  <li>git</li>
  <li>expressjs</li>
  <li>nodejs</li>
  <li>express-react-views</li>
  <li>mongodb</li>
  <li>mongoose</li>
</ul>
<p>This app was made for learning purposes only. It is built off nodejs & expressjs for server using git for version control. Mongodb w/ mongoose for database & express-react-views for server-side rendering. App is using form validation on the models. The two models are sharing a one-to-many relationship with the places having multiple comments.</p>
<h5>Here area a list of available routes</h5>
<ul>
  <li>"/" GET - Home route</li>
  <li>"/places" GET - Get all places</li>
  <li>"/places" POST - Create new place</li>
  <li>"/places/new" GET - Form to create new place</li>
  <li>"/places/:id" GET - Get place by id</li>
  <li>"/places/:id" PUT - Update place by id</li>
  <li>"/places/:id" DELETE - Delete place by id</li>
  <li>"/places/:id/edit" GET - Form to update place by id</li>
  <li>"places/:id/comments" POST - Create new comment</li>
  <li>"places/:id/comments/:rantId" DELETE - Delete comment by id</li>
</ul>
