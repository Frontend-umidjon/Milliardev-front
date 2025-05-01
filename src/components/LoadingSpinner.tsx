import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-full py-20">
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-yellow-500 border-solid"></div>
    </div>
  );
};

export default React.memo(LoadingSpinner);
