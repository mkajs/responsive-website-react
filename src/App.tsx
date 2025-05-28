import { Navbar, Hero, OurServices } from "@components/index";
import Stats from "@components/Stats";

const App = () => {
  return (
    <div className="bg-background font-display">
      <Navbar />
      <Hero />
      <Stats />
      <OurServices />
    </div>
  );
};
export default App;
