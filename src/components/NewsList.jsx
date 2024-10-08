/* eslint-disable no-unused-vars */

import { useLocation } from 'react-router-dom';
import Title from '../components/Title';
import NavBar from '../components/NavBar';
import NewsItem from './NewsItem';



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



export default NewsList;