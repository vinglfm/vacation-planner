import React, {PropTypes} from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';

const Sidebar = function({countries, onFilterChanged}) {
  return (
    <div>
      <input type="text" onChange={onFilterChanged}/>
      {countries.map(function(country, index) {
      return <SidebarItem key={index} index={index} country={country}/>;
    })}
    </div>
  );
};

Sidebar.propTypes = {
  countries: PropTypes.array.isRequired,
  onFilterChanged: PropTypes.func.isRequired
};

export default Sidebar;
