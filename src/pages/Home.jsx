/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Title from '../components/Title';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [url, setUrl] = useState('');
    const [text, setText] = useState('');
    const [source, setSource] = useState('');
    const [loading , setLoading] = useState(false);

    // const [result, setResult]=  useState([]);
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log('Submitted URL:', url);
      // console.log('Submitted Text:', text);
      // console.log('Selected Source:', source);
      // https://news.sky.com/story/lebanon-at-least-274-killed-and-more-than-1-000-injured-as-israel-widens-attack-on-hezbollah-targets-13220868
      if(url===''){
        setLoading(true);
        axios.post(import.meta.env.VITE_API_URL+"/news/",{
          url:url,
          article:text,
          source:source
        }).then((response) => {
          // console.log("Response ",response.data.result.results);
          navigate('/news', { state: { result: response.data.result.results } });
        }
        ).catch((error) => {
          console.log("Error ",error);
          navigate('/news', { state: { result: [] } });
        });
      } else {
        setLoading(true);
        axios.post(import.meta.env.VITE_API_URL+"/news/url",{
          url:url,
          article:text,
          source:source
        }).then((response) => {
          // console.log("Response ",response.data.result.results);
          navigate('/news', { state: { result: response.data.result.results } });
        }
        ).catch((error) => {
          console.log("Error ",error);
          navigate('/news', { state: { result: [] } });
        });
      }
    };

    const sources = ["BBC", "Sun","Mirror", "Daily Mail", "Independent","Guardian","Manchester Evening News", "Sky News", "Metro", "Telegraph", "Daily Express", "Times", "Liverpool Echo", "Birmingham Live", "Evening Standard",];
  
    return (
      <>
    <div className="max-w-4xl mx-auto p-4 bg-white">
        <header className="mb-6">
          <Title />
          <NavBar />
        </header>
        
        {loading && <div className="text-center">Loading...</div>}  
        {!loading &&   <main>
          <h2 className="text-xl font-semibold mb-4">Find Related News Article on Perspectify</h2>
          <form onSubmit={handleSubmit}>

            <div className="mb-4">
              <label htmlFor="url" className="block mb-2 text-sm uppercase">Source</label>
              <select name="" id="" value={source} onChange={(e)=>{setSource(e.target.value)}} className="border rounded">
                <option value="" disabled defaultChecked >Select Source</option>
                {sources.map((source, index) => (
                  <option key={index} value={source}>{source}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-4">
              <label htmlFor="url" className="block mb-2 text-sm uppercase">ENTER URL</label>
              <input
                type="text"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Please enter URL"
                className="w-full p-2 border rounded"
              />
            </div>
            
            <div>
              <div className="text-center my-4 relative">
                <hr className="border-t border-gray-300" />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">OR</span>
              </div>
                  
              <div className="mb-4">
                <label htmlFor="text" className="block mb-2 text-sm uppercase">ENTER TEXT</label>
                <textarea
                  id="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  className="w-full p-2 border rounded h-32 text-sm"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 uppercase"
            >
              Submit
            </button>
          </form>
        </main>
        }
      </div>
      </>
    );
  };

export default Home;