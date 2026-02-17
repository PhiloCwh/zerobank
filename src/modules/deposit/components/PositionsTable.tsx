import { useMemo } from "react";
import { useDepositStore } from "../store";
import { useUserPositions } from "../hooks/useUserPositions";
import { PositionRow } from "./PositionRow";

export const PositionsTable = () => {
  const { selectedBorrowToken } = useDepositStore();

  const tokens = useMemo(
    () => (selectedBorrowToken ? [selectedBorrowToken] : []),
    [selectedBorrowToken],
  );

  const { positions, isLoading, refetch } = useUserPositions(tokens);

  return (
    <div className="w-full bg-[#151320] border border-slate-800 rounded-2xl p-6 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white tracking-wide">
          POSITIONS
        </h2>
        <div className="flex gap-2">{/* Filters could go here */}</div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-slate-400 text-xs font-mono uppercase border-b border-slate-800">
              <th className="py-3 px-4 font-normal">Pair</th>
              {/* <th className="py-3 px-4 font-normal">Side</th> */}
              <th className="py-3 px-4 font-normal">Size</th>
              <th className="py-3 px-4 font-normal text-right">Liq. Price</th>
              <th className="py-3 px-4 font-normal text-right">
                Mark Price (BNB)
              </th>
              <th className="py-3 px-4 font-normal text-right">
                Healthy Factor
              </th>
              <th className="py-3 px-4 font-normal text-right">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm font-mono">
            {positions.length > 0 ? (
              positions.map((position) => (
                <PositionRow
                  key={position.token.address}
                  position={position}
                  onSuccess={refetch}
                />
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-12 text-center text-slate-500">
                  {selectedBorrowToken
                    ? isLoading
                      ? "Loading..."
                      : "No active positions for this token"
                    : "Select a token to view positions"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
