import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchWidget from "./components/SearchWidget";
import ContentCards from "./components/ContentCards";
import FeaturedDestination from "./components/FeaturedDestination";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchWidget />
      <ContentCards />
      <FeaturedDestination />
      <Testimonial />
      <Footer />
    </>
  );
}
