import React, { useEffect, useState } from 'react';
import { Dispatch } from "redux";
import styled from 'styled-components';
import tw from 'twin.macro';
import { ICar } from '../../../typings/car';
import Car from '../../components/car';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../components/responsive';
import carService from '../../services/carService';
import { setTopCars } from './slice';
import { GetCars_cars } from '../../services/carService/__generated__/GetCars';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectTopCars } from './selectors';
import { MoonLoader } from 'react-spinners';


const TopCarsContainer = styled.div`
  ${tw`
      max-w-screen-lg
      w-full
      flex
      flex-col
      items-center
      justify-center
      pr-4
      pl-4
      md:pl-0
      md:pr-0
      mb-10
   `};
`;

const Title = styled.h2`
  ${tw`
      text-xl
      lg:text-5xl
      text-black
      font-extrabold
   `}
`;

const CarsContainer = styled.div`
  ${tw`
      w-full
      flex
      flex-wrap
      justify-center
      mt-7
      md:mt-10
   `}
`;

const EmptyCars = styled.div`
   ${tw`
      w-full
      flex
      justify-center
      items-center
      text-sm
      text-gray-500
   `}
`

const LoadingContainer = styled.div`
   ${tw`
      w-full
      flex
      mt-10
      justify-center
      items-center
      text-base
      text-gray-500
   `}
`


const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
   topCars
}))

export default function TopCars() {
   const [current, setCurrent] = useState(0);
   const [isLoading, setLoading] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
   
  const { topCars } = useSelector(stateSelector);
  const { setTopCars } = actionDispatch(useDispatch());

   const fetchTopCars = async () => {
    setLoading(true) 
    const cars = await carService.getCars().catch((err) => {
      console.log('Error: ', err);
    });

    console.log('Cars: ', cars);
      if (cars) setTopCars(cars);
      setLoading(false);
  };
   
   
   const isEmptyTopCars = !topCars || topCars.length === 0;
   const cars = !isEmptyTopCars && topCars.map((car) => <Car {...car} thumbnailSrc={car.thumbnailUrl}></Car>) || []

  useEffect(() => {
    fetchTopCars();
  }, []);
   
  

  return (
    <TopCarsContainer>
        <Title>Explore Our Top Deals</Title>
        {isLoading && <LoadingContainer>
         <MoonLoader loading size={20}></MoonLoader>
        </LoadingContainer>}
        {isEmptyTopCars && !isLoading && <EmptyCars>No Cars To Show!</EmptyCars> }
        {!isEmptyTopCars && !isLoading &&
           (<CarsContainer>
           <Carousel
              value={current}
              onChange={setCurrent}
              plugins={[
                 'clickToChange',
                 {
                    resolve: slidesToShowPlugin,
                    options: {
                       numberOfSlides: 3,
                    },
                 },
              ]}
              slides={cars}
              breakpoints={{
                 640: {
                    plugins: [
                       {
                          resolve: slidesToShowPlugin,
                          options: {
                             numberOfSlides: 1,
                          },
                       },
                    ],
                 },
                 900: {
                    plugins: [
                       {
                          resolve: slidesToShowPlugin,
                          options: {
                             numberOfSlides: 2,
                          },
                       },
                    ],
                 },
              }}
           />
           <Dots
              value={current}
              onChange={setCurrent}
              number={isMobile ? cars.length : Math.ceil(cars.length / 3)}
           />
        </CarsContainer>)}
    </TopCarsContainer>
  );
}
