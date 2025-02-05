import { Link } from 'react-router';

function Error() {
  return (
    <>
      <h1>Sorry, something went wrong..</h1>
      <Link to="/">Go Back</Link>
    </>
  );
}

export default Error;
