const React = require('react');
const Layout = require('./layouts/Layout.jsx');

function Edit(props) {
  const { name, _id, specialty, yearsExperience, available } = props.engineer;

  return (
    <Layout engineer={props.engineer}>
      <h1>{name} Edit Page</h1>
      <a href="/engineers">Go back to Index Page</a>
      <form action={`/engineers/${_id}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" defaultValue={name} /><br />
        Specialty: <input type="text" name="specialty" defaultValue={specialty} /><br />
        yearsExperience: <input type="text" name="yearsExperience" defaultValue={yearsExperience} /><br />
        Available: <input type="checkbox" name="available" defaultChecked={available} /><br />
        <input type="submit" value="Update Engineer" />
      </form>
    </Layout>
  );
}

module.exports = Edit;
