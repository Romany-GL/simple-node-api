import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  const callApi = async () => {
    const apiUrl = 'http://localhost:5005/api/users';
    const response = await fetch(apiUrl);
    console.log('response', response);
    const body = await response.json();
    console.log('body:::>>>', body);
    setData(body);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className='App'>
      {data
        ? data.map((user, index) => {
            return (
              <>
                <div key={index}>
                  <h1>{user.fname}</h1>
                  <h2>{user.email}</h2>
                </div>
                <hr />
              </>
            );
          })
        : null}
    </div>
  );
}

export default App;
