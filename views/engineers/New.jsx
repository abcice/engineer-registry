const React = require('react');
const Layout = require('./layouts/Layout');

function New() {
  return (
    <Layout>
      <h1>New Engineer Page</h1>
      <a href="/engineers">Go back to Index Page</a>

      <form action="/engineers" method="POST">
        Name: <input type="text" name="name" /><br />
        Specialty: <input type="text" name="specialty" /><br />
        Years Experience: <input type="text" name="yearsExperience" /><br />
        Available: <input type="checkbox" name="available" /><br />
        <input type="submit" value="Create Engineer" />
      </form>
    </Layout>
  );
}

module.exports = New;
