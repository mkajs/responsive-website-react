import { Navbar, Hero } from "@components/index";
import Stats from "@components/Stats";

const App = () => {
  return (
    <div className="bg-background font-display">
      <Navbar />
      <Hero />
      <Stats />
    </div>
  );
};
export default App;
