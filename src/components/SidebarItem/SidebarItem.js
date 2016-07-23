import React, {PropTypes} from 'react';

const SidebarItem = function({country, index}){
  return <div key={index}>{country.name}</div>;
};

SidebarItem.propTypes = {
  index: PropTypes.number.isRequired,
  country: PropTypes.object.isRequired
};

export default SidebarItem;
