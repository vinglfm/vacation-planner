import React, {PropTypes} from 'react';

import classnames from 'classnames';
import styles from './styles.module.css';

const SidebarItem = function({country, index, onItemClick, selected}){
  let classes = classnames('list-group-item', {'active':index === selected});
  return (<button className={classes} key={index} onClick={onItemClick}
  data-countryCode={country.code} data-index={index}>{country.name}</button>);
};

SidebarItem.propTypes = {
  index: PropTypes.number.isRequired,
  country: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired
};

export default SidebarItem;
