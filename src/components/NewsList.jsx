/* eslint-disable no-unused-vars */

import PropTypes from 'prop-types'; // Import PropTypes
import { useLocation } from 'react-router-dom';
import Title from '../components/Title';
import NavBar from '../components/NavBar';

const NewsItem = ({ pagemap, title, displayLink, link, index, snippet }) => {
  if (!pagemap || !pagemap.cse_image || !pagemap.cse_image[0]) {
    // console.error('Missing image data for:', title, index);
    return null;
  }

  const imageUrl = pagemap.cse_image[0].src;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <a href={link} target='blank'>
        <div className="relative pb-[56.25%]">
          <img 
            src={imageUrl} 
            alt={title} 
            className="absolute top-0 left-0 w-full h-full object-cover" 
            onError={(e) => {
              console.error('Error loading image:', imageUrl);
              e.target.src = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'; // Fallback image
            }}
          />
        </div>
        <div className="p-3 sm:p-4">
          <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs sm:text-sm font-semibold text-gray-700 mb-2">
            {displayLink}
          </span>
          <h3 className="text-sm sm:text-base md:text-lg font-semibold leading-tight">{title}</h3>
          <p>{snippet}</p>
        </div>
      </a>
    </div>
  );
};

// NewsItem.propTypes = {
//   pagemap: PropTypes.shape({
//     cse_image: PropTypes.arrayOf(PropTypes.shape({
//       src: PropTypes.string.isRequired
//     }))
//   }),
//   title: PropTypes.string.isRequired,
//   displayLink: PropTypes.string.isRequired
// };

const NewsList = () => {
  const location = useLocation();
  const newsItems = location.state?.result || [];

  console.log('All news items:', newsItems);

  if (newsItems.length === 0) {
    return <div>No news items available.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <header className="mb-6">
          <Title />
          <NavBar />
        </header>
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Suggested News Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {newsItems.map((item, index) => (
          <NewsItem key={index} {...item } index={index} />
        ))}
      </div>
    </div>
  );
};

 // Add prop validation for 'source'
 NewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    displayLink: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    pagemap: PropTypes.object.isRequired,
    snippet: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  };

export default NewsList;