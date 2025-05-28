const ServiceInfoCard = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-secondary flex flex-col md:odd:flex-row md:even:flex-row-reverse">
      <div className="flex-1">
        <img className="h-80 w-full md:h-full" src={img} alt="title" />
      </div>
      <div className="flex-1">
        <div className="p-10">
          <h6 className="text-md text-darkBlue mb-3 font-medium md:text-xl">
            {title}
          </h6>
          <p className="text-darkBlue text-sm leading-6 whitespace-pre-line md:text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ServiceInfoCard;
