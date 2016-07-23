import React, {PropTypes} from 'react';

const SidebarItem = function({country, index}){
  return <div key={index}>{country.name}</div>;
};

SidebarItem.propTypes = {
  index: PropTypes.object.isRequired,
  country: PropTypes.array.isRequired
};

export default SidebarItem;
