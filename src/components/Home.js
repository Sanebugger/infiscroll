// import React from 'react'
// import { Link } from 'react-router-dom';
// import Logout from './logout';
// export default function Home() {
//   return (
//     <div>
//       <ul className='nav-ul'>
//         <h3>Home Page</h3>
//         <li>
//           <Link to='/logout'> <Logout/></Link>
//         </li>
//       </ul>

//     </div>
//   )
// }
import React from 'react'
import { Link } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import Loader from "./Loader";
import EndMsg from "./EndMsg";

export default function Home() {

  const [items, setItems] = useState([]);

  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(2);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20`
        // For json server use url below
        // `http://localhost:3004/comments?_page=1&_limit=20`
      );
      const data = await res.json();
      setItems(data);
    };

    getComments();
  }, []);

  const fetchComments = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`
      // For json server use url below
      // `http://localhost:3004/comments?_page=${page}&_limit=20`
    );
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const commentsFormServer = await fetchComments();

    setItems([...items, ...commentsFormServer]);
    if (commentsFormServer.length === 0 || commentsFormServer.length < 20) {
      sethasMore(false);
    }
    setpage(page + 1);
  };


    return (
      <div>
        <ul className='nav-ul'>

          <li>
            <Link to='/home'>home</Link>
          </li>
          <li>
            <Link to='/logout'>Logout</Link>
          </li>

        </ul>

        <InfiniteScroll
          dataLength={items.length} //This is important field to render the next data
          next={fetchData}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={<EndMsg />}
        >
          <div className="container">
            <div className="row m-2">
              {items.map((item) => {
                return <Comment key={item.id} item={item} />;
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    )
  }

