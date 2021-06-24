import React from 'react'
import styled from 'styled-components'
import { SCREENS } from '../../components/responsive'

import JeepImg from "../../../assets/images/jeep.png"
import tw from 'twin.macro'

const AboutUsContainer = styled.div`
   ${tw`
      w-full
      flex
      flex-wrap
      items-center
      justify-center
      pt-4
      pb-4
      pr-7
      pl-7
      md:pl-0
      md:pr-0
      bg-white
   `}
` 

const CarContainer = styled.div`
   width: auto;
   height: 15em;
   margin-left: -50px;

   img {
      width: auto;
      height: 100%;
   }

   @media (min-width: ${SCREENS.md}) {
      height: 28em;
   }

   @media (min-width: ${SCREENS.md}) {
      height: 30em;
   }

   @media (min-width: ${SCREENS["2xl"]}) {
      height: 35em;
      margin-left: 0;
   }
`

const InfoContainer = styled.div`
   ${tw`
      md:w-1/2
      flex
      flex-col
      md:ml-6
      2xl:ml-16
   `}
`

const Title = styled.h1`
   ${tw`
      text-black
      text-2xl
      md:text-5xl
      font-extrabold
      md:font-black
      md:leading-normal
   `}
`

const InfoText = styled.p`
   ${tw`
      md:max-w-2xl
      text-sm
      md:text-base
      text-gray-500
      font-normal
      mt-4
   `}
`

export default function aboutUs() {
   return <AboutUsContainer>
      <CarContainer>
         <img src={JeepImg} />
      </CarContainer>
      <InfoContainer>
         <Title>
            Feel The Best Experience With Our Rental Deals
         </Title>
         <InfoText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste excepturi, maxime fugit est porro minus facilis quia natus ex obcaecati dignissimos optio minima odio? Fugiat in et nesciunt dignissimos tempora?
            Magnam dolorem temporibus, deserunt cupiditate ut libero ipsum minima quasi repellat modi odio, aliquid, officiis voluptatum similique corporis aspernatur nesciunt voluptatem aut possimus animi praesentium. Dolore explicabo est voluptatibus soluta!
            Ad ipsum officia tenetur in dignissimos iusto et? Perferendis voluptate ea atque repudiandae recusandae eaque? Provident aspernatur vel deleniti nobis, placeat nemo consectetur ipsam dolore distinctio nisi, iste odio sunt.
            <br></br><br></br>
            Ad ipsum officia tenetur in dignissimos iusto et? Perferendis voluptate ea atque repudiandae recusandae eaque? Provident aspernatur vel deleniti nobis, placeat nemo consectetur ipsam dolore distinctio nisi, iste odio sunt.
         </InfoText>
      </InfoContainer>
   </AboutUsContainer>
}