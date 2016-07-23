import React, {PropTypes} from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';

const Sidebar = function({countries}) {
  return (
    <div>
    {countries.map(function(country, index) {
      return <SidebarItem index={index} country={country}/>;
    })}
    </div>
  );
};

Sidebar.propTypes = {
  countries: PropTypes.array.isRequired
};

export default Sidebar;
