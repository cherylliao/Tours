import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'machu picchu',
          imageUrl: 'https://i.ibb.co/4FMvrBF/Machu.jpg',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'rainbow mountain',
          imageUrl: 'https://i.ibb.co/c2j82zs/rainbow.jpg',
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
          title: 'amazon one week',
          imageUrl: 'https://i.ibb.co/L8TzDyn/amazon.jpg',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'inca trails 2 weeks',
          imageUrl: 'https://i.ibb.co/WP7Qfqb/Inca.jpg',
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
