import React, {PropTypes} from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';

import styles from './styles.module.css';

const Sidebar = function({countries, onFilterChanged, onItemClick}) {
  return (
    <div className="col-md-3">
      <input type="text" className="form-control" placeholder="Search"
          onChange={onFilterChanged}/>
      <div className="list-group">
        {countries.map((country, index) => {
        return <SidebarItem key={index} index={index} country={country} onItemClick={onItemClick}/>;
      })}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  countries: PropTypes.array.isRequired,
  onFilterChanged: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default Sidebar;
