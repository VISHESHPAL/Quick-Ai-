import React, { useState } from "react";
import Markdowm from "react-markdown";
const CreationItem = ({ item }) => {
  const [expended, setExpended] = useState(false);
  return (
    <div
      onClick={() => setExpended(!expended)}
      className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer "
    >
      <div className="flex justify-between items-center gap-4">
        <div>
          <h2> {item.prompt}</h2>
          <p className="text-gray-500">
            {item.type} - {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>
        <button className="bg-[#EFF6FF] border border-[#bfdbfe] text-[#1e40af] px-4 py-1 rounded-full">
          {" "}
          {item.type}{" "}
        </button>
      </div>
      {expended && (
        <div>
          {item.type === "image" ? (
            <div>
              <img
                src={item.content}
                alt="image"
                className=" mt-3 w-full max-w-md"
              />
            </div>
          ) : (
            <div className="mt-3 w-full overflow-y-scroll text-sm  text-slate-700">
              <div className="reset-tw">
                <Markdowm>{item.content}</Markdowm>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreationItem;
