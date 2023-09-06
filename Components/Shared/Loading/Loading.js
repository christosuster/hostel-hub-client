import React from 'react';
import { HashLoader } from "react-spinners";

const Loading = () => {
    return (
      <div className="flex w-full items-center justify-center py-40">
        <HashLoader color="#3ed7d5" size={100} />
      </div>
    );
};

export default Loading;