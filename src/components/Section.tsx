// components/PortfolioGrid.tsx

import React from "react";
import TextEffect from "./TextEffect";
import { useGetProjectsQuery } from "../redux/api/projects";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import PortfolioCard from "./PortfolioCard";

const PortfolioGrid = () => {
  const { data, isLoading } = useGetProjectsQuery({});
  const projects = (data?.data?.payload || []).filter(
    (item: any) => item.is_done === true
  );

  return (
    <div className="bg-[rgb(18,23,35)] text-white py-10 text-center">
      <TextEffect text={"Портфолио IT-компании Milliardev"} />
      {isLoading ? (
        <div className="flex justify-center py-10">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
            {projects.slice(0, 3).map((item: any) => (
              <PortfolioCard key={item._id} {...item} />
            ))}
          </div>

          {projects.length > 3 ? (
            <div className="mt-8">
              <Link
                to="/projects"
                className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition"
              >
                Показать больше
              </Link>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default React.memo(PortfolioGrid);
