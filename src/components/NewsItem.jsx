
import PropTypes from 'prop-types'; // Import PropTypes


// eslint-disable-next-line no-unused-vars
const NewsItem = ({ title, source, link, thumbnail, snippet, bias }) => {
    // if (!pagemap || !pagemap.cse_image || !pagemap.cse_image[0]) {
    //   // console.error('Missing image data for:', title, index);
    //   return null;
    // }
  
    const imageUrl = thumbnail || 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'; // Fallback image
  
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
          <div className="p-3 sm:p-4 ">
           <div className="flex justify-between">
              <span className="inline-block bg-gray-900 rounded-full px-2 py-1 text-xs sm:text-sm font-semibold text-gray-100 mb-2">
                {source}
              </span>
              <span className="inline-block bg-gray-900 rounded-full px-2 py-1 text-xs sm:text-sm font-semibold text-gray-100 mb-2">
                {bias}
              </span>
           </div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold leading-tight">{title}</h3>
            <p>{snippet}</p>
          </div>
        </a>
      </div>
    );
  };

   // Add prop validation for 'source'
 NewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    snippet: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    bias: PropTypes.string.isRequired
  };

  export default NewsItem;  