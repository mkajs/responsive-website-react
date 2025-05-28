import type { JSX } from "react";

const StatsCard = ({
  Icon,
  count,
  label,
}: {
  Icon: JSX.Element;
  count: string;
  label: string;
}) => {
  return (
    <div className="flex min-w-48 flex-col items-center justify-center py-6 sm:py-14">
      <div className="bg-lightBlue flex h-14 w-14 items-center justify-center rounded-full">
        {Icon}
      </div>
      <p className="text-darkBlue mt-4 text-xl font-medium md:text-2xl">
        {count}
      </p>
      <span className="md:text-md text-darkBlue mt-1 text-sm">{label}</span>
    </div>
  );
};
export default StatsCard;
