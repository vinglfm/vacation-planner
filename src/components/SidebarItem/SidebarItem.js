import React, {PropTypes} from 'react';
import styles from './styles.module.css';

const SidebarItem = function({country, index, onItemClick}){
  return (<button className="list-group-item" key={index} onClick={onItemClick}
  data-countryCode={country.code}>{country.name}</button>);
};

SidebarItem.propTypes = {
  index: PropTypes.number.isRequired,
  country: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default SidebarItem;
