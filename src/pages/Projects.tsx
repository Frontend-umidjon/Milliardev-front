import React from "react";
import { useGetProjectsQuery } from "../redux/api/projects";
import TextEffect from "../components/TextEffect";
import LoadingSpinner from "../components/LoadingSpinner";
import PortfolioCard from "../components/PortfolioCard";

const Projects = () => {
  const { data, isLoading } = useGetProjectsQuery({});
  const projects = (data?.data?.payload || []).filter(
    (item: any) => item.is_done == true
  );

  return (
    <div className="bg-[rgb(18,23,35)] text-white py-10 text-center">
      <TextEffect text={"Портфолио IT компании Milliardev"} />
      {isLoading ? (
        <div className="flex justify-center py-10">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
            {projects.map((item: any) => (
              <PortfolioCard key={item._id} {...item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(Projects);
