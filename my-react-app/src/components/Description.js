import React from 'react';
import '../Description.css';

const cards = [
  { title: 'Mountain View', copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', button: 'View Trips' },
  { title: 'To The Beach', copy: 'Plan your next beach trip with these fabulous destinations', button: 'View Trips' },
  { title: 'Desert Destinations', copy: 'It\'s the desert you\'ve always dreamed of', button: 'Book Now' },
  { title: 'Explore The Galaxy', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now' }
];

const Description = () => {
  return (
    <main className="page-content">
      {cards.map((card, index) => (
        <div key={index} className="card2" style={{ backgroundImage: `url(${getBackgroundImage(index + 1)})` }}>
          <div className="content">
            <h2 className="title">{card.title}</h2>
            <p className="copy">{card.copy}</p>
            <button className="btn">{card.button}</button>
          </div>
        </div>
      ))}
    </main>
  );
};

function getBackgroundImage(index) {
  return `https://images.unsplash.com/photo-${getImageId(index)}?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ`;
}

function getImageId(index) {
  const imageIds = ['1517021897933-0e0319cfbc28', '1533903345306-15d1c30952de', '1545243424-0ce743321e11', '1531306728370-e2ebd9d7bb99'];
  return imageIds[index - 1];
}

export default Description;
