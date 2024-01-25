import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";

const Home = () => {
	return (
		<div>
			<HeroSection />
			<PageSearch />
			<Gallery />
			<NewsLetter />
		</div>
	);
};

export default Home;
