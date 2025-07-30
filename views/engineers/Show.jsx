const React = require('react');
const Layout = require('./layouts/Layout');

function Show(props) {
  const { name, specialty, yearsExperience, available, _id } = props.engineer;

  return (
    <Layout engineer={props.engineer}>
      <h1>{name} Page</h1>
      <a href="/engineers">Go back to Index Page</a>
      <p>
        {name} with the specialty of {specialty}, {yearsExperience} years of experience, and is {available ? 'Available' : 'Not Available'}.
      </p>

      <div className="action-buttons">
        <a href={`/engineers/${_id}/edit`}>
          <button>Edit this engineer</button>
        </a>

        <form action={`/engineers/${_id}?_method=DELETE`} method="POST" style={{ display: 'inline' }}>
          <input type="submit" value="Delete this engineer" className="delete-btn" />
        </form>
      </div>
    </Layout>
  );
}

module.exports = Show;
