import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
<<<<<<< HEAD
          title: 'Aamazon tour',
          imageUrl: 'https://i.ibb.co/L8TzDyn/amazon.jpg',
=======
          title: 'machu picchu',
          imageUrl: 'https://i.ibb.co/4FMvrBF/Machu.jpg',
>>>>>>> c8db2ca3583e490cdf538785c4c5b1ee7e6ebf11
          id: 1,
          linkUrl: ''
        },
        {
<<<<<<< HEAD
          title: 'inca trail',
          imageUrl: 'https://i.ibb.co/WP7Qfqb/Inca.jpg',
=======
          title: 'rainbow mountain',
          imageUrl: 'https://i.ibb.co/c2j82zs/rainbow.jpg',
>>>>>>> c8db2ca3583e490cdf538785c4c5b1ee7e6ebf11
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
<<<<<<< HEAD
          title: 'ancient artifacts',
          imageUrl: 'https://i.ibb.co/hgf8175/artifaces.jpg',
          size: 'large',
=======
          title: 'amazon one week',
          imageUrl: 'https://i.ibb.co/L8TzDyn/amazon.jpg',
>>>>>>> c8db2ca3583e490cdf538785c4c5b1ee7e6ebf11
          id: 4,
          linkUrl: ''
        },
        {
<<<<<<< HEAD
          title: 'gifts',
          imageUrl: 'https://i.ibb.co/PwxwBvg/flute.jpg',
          size: 'large',
=======
          title: 'inca trails 2 weeks',
          imageUrl: 'https://i.ibb.co/WP7Qfqb/Inca.jpg',
>>>>>>> c8db2ca3583e490cdf538785c4c5b1ee7e6ebf11
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
