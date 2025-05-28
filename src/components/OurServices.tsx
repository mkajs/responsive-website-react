import ServiceInfoCard from "@components/Cards/ServiceInfoCard";
import { SERVICES } from "../utils/data";

const OurServices = () => {
  return (
    <section className="mx-auto max-w-[1200px] py-16">
      <h5 className="text-darkBlue mb-10 text-center text-2xl font-semibold">
        Our Services
      </h5>
      <div className="bg-white lg:shadow-xl lg:shadow-slate-200/50">
        {SERVICES.map((service) => (
          <ServiceInfoCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};
export default OurServices;
