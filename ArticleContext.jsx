// // ArticleContext.js
// import { createContext, useContext, useState } from 'react';
// import PropTypes from 'prop-types'; // Add this line to import PropTypes

// const ArticleContext = createContext();

// export function ArticleProvider({ children }) {
//     const [articles, setArticles] = useState([]);
    
//     const value = {
//         articles,
//         setArticles
//     };
    
//     return (
//     <ArticleContext.Provider value={value}>
//       {children}
//     </ArticleContext.Provider>
//   );
// }

// export function useArticles() {
//     return useContext(ArticleContext);
// }
// // Add prop type validation for 'children'
// ArticleProvider.propTypes = {
//   children: PropTypes.node.isRequired
// };