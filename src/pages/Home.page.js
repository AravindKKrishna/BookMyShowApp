
//rafce
import React, { useState } from 'react'
//LayoutHOC
import DefaultLayoutHoc from '../layout/Default.layout'

//components

import HeroCarouselComponent from '../components/HeroCarousel/HeroCarousel.Component'
import PosterSliderComponent from '../components/PosterSlider/PosterSlider.Component'
import EntertainmentCard from '../components/Entertainment/EntertainmentCard.Component'



const Homepage = () => {
  const [RecommendedMovies , SetRecommendedMovies] = useState();
  const [preimierMovies, SetpreimierMovies] = useState();
  const [onlineStreamEvents, SetonlineStreamEvents] = useState();
  return (
    <>
      <HeroCarouselComponent />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-grey-800 sm:ml-3 ml-0-my-3">
          The best of entertainments
        </h1>
        <EntertainmentCard />
      </div>
      <div className="container mx-auto px-4 md:px-12 my_8">
        <PosterSliderComponent
          title="Recommended Movies"
          subject="List of recomended movies"
          posters={RecommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12"></div>
      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
        <div className="hidden md:flex">
          <img
            src=""
            alt="rupay"
            className="w-full h-full"
          />
        </div>
        <div>
          <PosterSliderComponent
            title="premiers"
            subject=" Brand new release in friday"
            posters={preimierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className='container mx-auto px-4 md:px-12 my-8 '>
        <PosterSliderComponent
          title="Online Stream Events"
          subject=" Brand new release in friday"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
}

export default DefaultLayoutHoc(Homepage)
