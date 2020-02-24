import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'tours',
          imageUrl: 'https://i.ibb.co/FWN9xrf/tours.jpg',
          id: 1,
          linkUrl: 'tours'
        },
        {
          title: 'herbs',
          imageUrl: 'https://i.ibb.co/wYJXhHz/leaves.jpg',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'shamans',
          imageUrl: 'https://i.ibb.co/ZW82sYh/shaman.jpg',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'crystals',
          imageUrl: 'https://i.ibb.co/9wKLK2C/crystals.jpg',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'music',
          imageUrl: 'https://i.ibb.co/R3G7bP2/music.jpg',
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