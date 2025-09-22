import React, { useEffect, useState } from "react";
import { dummyCreationData } from "../assets/assets";
import { Gem, Sparkles } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import CreationItem from "../components/CreationItem";

const DashBoard = () => {
  const { user } = useUser();
  const [creations, setCreations] = useState([]);

  const getDashboardData = async () => {
    setCreations(dummyCreationData);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Cards */}
        <div className="flex justify-start gap-4 flex-wrap mb-8">
          {/* Total Creations Card */}
          <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="text-slate-600">
              <p className="text-sm">Total Creation</p>
              <h2 className="text-xl font-semibold">{creations.length}</h2>
            </div>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] text-white flex justify-center items-center">
              <Sparkles className="w-5 text-white" />
            </div>
          </div>

          {/* Active Plan Card */}
          <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="text-slate-600">
              <p className="text-sm">Active Plan</p>
              <h2 className="text-xl font-semibold">
                {user?.publicMetadata?.plan === "premium" ? "Premium" : "Free"}
              </h2>
            </div>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF61C5] to-[#9E53EE] text-white flex justify-center items-center">
              <Gem className="w-5 text-white" />
            </div>
          </div>
        </div>

        {/* Recent Creations Section */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Creations
          </h2>
          <div className="space-y-3">
            {creations.length > 0 ? (
              creations.map((item) => (
                <CreationItem key={item.id} item={item} />
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No creations found. Start creating something amazing!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;