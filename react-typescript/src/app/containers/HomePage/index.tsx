import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Footer from "../../components/footer";
import BookCard from "../../components/bookCard";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topSection";
import BookingSteps from "./bookingSteps";
import AboutUs from "./aboutUs";
import TopCars from "./topCars";


const PageContainer = styled.div`
   ${tw`
      flex
      flex-col
      w-full
      h-full
      items-center
      overflow-x-hidden
   `}
`;

export function HomePage() {
   return <PageContainer>
      <Navbar />
      <TopSection/>
      <Marginer direction="vertical" margin="4em"></Marginer>
      <BookCard/>
      <Marginer direction="vertical" margin="8em"></Marginer>
      <BookingSteps/>
      <Marginer direction="vertical" margin="8em"></Marginer>
      <AboutUs></AboutUs>
      <Marginer direction="vertical" margin="8em"></Marginer>
      <TopCars></TopCars>
      <Footer/>

   </PageContainer>
}