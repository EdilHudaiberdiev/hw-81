import {NavLink} from 'react-router-dom';

const Toolbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

      <div className="container">
        <NavLink to='/' className="navbar-brand d-flex ">
          <p className="me-2">Link shorter maker</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Toolbar;