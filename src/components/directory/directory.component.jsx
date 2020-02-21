import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Aamazon tour',
          imageUrl: 'https://i.ibb.co/L8TzDyn/amazon.jpg',
          id: 1,
          linkUrl: ''
        },
        {
          title: 'inca trail',
          imageUrl: 'https://i.ibb.co/WP7Qfqb/Inca.jpg',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'sacred valley',
          imageUrl: 'https://i.ibb.co/pZ3GskN/valley.jpg',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'ancient artifacts',
          imageUrl: 'https://i.ibb.co/hgf8175/artifaces.jpg',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'gifts',
          imageUrl: 'https://i.ibb.co/PwxwBvg/flute.jpg',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
