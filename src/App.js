import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import Movierow from './components/Movierow';
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';
import './App.css';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o feature
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }

    loadAll();
  }, [])

  return (
    <div className="page">

      <Header />


      {
        featureData &&
        <FeatureMovie item={featureData} />
      }
      <section className="lists">
        {
          movieList.map((item, key) => (
            <Movierow key={key} title={item.title} items={item.items} />
          ))
        }
      </section>
    </div>
  );
}
