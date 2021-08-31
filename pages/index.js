import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {
  //--LAYOUT
  MaxContainer,
  Spacer,
  //--ATOMS
  Header,
  Separator,
  //--MOLECULES
  Footer,
  HeroCellphone,
  HeroMain,
  Navbar,
} from "bella-olonge-components";

export default function Home() {

  const handlePlayStore = () => {
    window.location.href = "https://play.google.com/store?hl=es_MX&gl=US";
  };
  const handleAppStore = () => {
    window.location.href = "https://www.apple.com/mx/app-store/";
  };
  const handleTwitter = () => {
    window.location.href = "https://twitter.com/?lang=es";
  };
  const handleFacebook = () => {
    window.location.href = "https://www.facebook.com/enespanol/";
  };
  const handleInstagram = () => {
    window.location.href = "https://www.instagram.com/?hl=es";
  };

  return (
    <>
      <Navbar />
      <MaxContainer>
        <HeroMain onClick1={handlePlayStore} onClick2={handleAppStore} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Spacer size="xl" />
          <Separator />
          <Spacer size="lg" />
          <Header
            textDisplayed="How the app works"
            textColorized="secondary"
            textSize="sm"
          />
          <Spacer size="xl" />
        </div>
        <HeroCellphone />
        <Spacer size="xl" />
        <HeroCellphone
          imageNumber="3"
          displayOrder="reverse"
          textHeader1="Explore varieties"
          textHeader2="Shop for your favorites meal as e dey hot."
          textParagraph="Shop for your favorite meals or drinks and enjoy while doing it."
        />
        <Spacer size="xl" />
        <HeroCellphone
          imageNumber="4"
          displayOrder="original"
          textHeader1="Checkout"
          textHeader2="When you done check out and get it delivered."
          textParagraph="When you done check out and get it delivered with ease."
        />
        <Spacer size="xl" />
        <HeroMain
          backgroundImage="hero-2"
          btnsRoundType="semi"
          hasImage={false}
          textParaghraph="Available on your favorite store. Start your premium experience now"
          textheader1=""
          textheader2="Download the app now."
          onClick1={handlePlayStore}
          onClick2={handleAppStore}
        />
        <Footer
          onClick1={handleTwitter}
          onClick2={handleFacebook}
          onClick3={handleInstagram}
        />
      </MaxContainer>
    </>
  )
}
