const React = require('react');
const Layout = require('./layouts/Layout.jsx');

function Index(props) {
  return (
    <Layout>
      <h1>Engineers</h1>
      <a href="/engineers/new">Add New Engineer</a>
      <div>
        {props.engineers.map((engineer) => (
          <div key={engineer._id} className="engineer-card">
            <h2>{engineer.name}</h2>
            <p>Specialty: {engineer.specialty}</p>
            <p>Experience: {engineer.yearsExperience} years</p>
            <p>Available: {engineer.available ? 'Yes' : 'No'}</p>

            <div className="action-buttons">
              <a href={`/engineers/${engineer._id}`}>View</a>
              <a href={`/engineers/${engineer._id}/edit`}>Edit</a>
              <form action={`/engineers/${engineer._id}?_method=DELETE`} method="POST" style={{ display: 'inline' }}>
                <input type="submit" value="Delete" className="delete-btn" />
              </form>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Index;
