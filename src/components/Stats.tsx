import { STATS_DATA } from "../utils/data";
import StatsCard from "./Cards/StatsCard";

const Stats = () => {
  return (
    <section className="bg-secondary">
      <div className="max-auto flex max-w-screen flex-wrap justify-around">
        {STATS_DATA.map((item) => (
          <StatsCard key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
};
export default Stats;
