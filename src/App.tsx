import React, { Suspense } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Loader from './component/loader';

function App() {
  const MoviesList = React.lazy(() => import('./component/movieList'));
  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <MoviesList />
        </Suspense>
      </Provider>
    </>
  );
}

export default App;
