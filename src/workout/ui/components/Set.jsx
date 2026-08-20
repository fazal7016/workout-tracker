import React from "react";

const Set = ({ index, register, errors }) => {
  return (
    <div className="mt-5 space-y-3">
      <div className="rounded-2xl border border-[#6D9773]/20 bg-      [#F7F8F5] p-4">
        <div className="grid grid-cols-[60px_1fr_1fr] items-end gap-3 sm:grid-cols-[80px_1fr_1fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
              Set
            </span>

            <div className="mt-2 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0C3B2E] text-sm font-bold text-white">
              {index + 1}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-gray-500">
              Weight
            </label>

            <div className="relative">
              <input
                {...register(`sets.${index}.weight`, {
                  required: "Weight required",
                })}
                type="number"
                step="0.5"
                placeholder="60"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pr-12 text-sm outline-none focus:border-[#6D9773] focus:ring-4 focus:ring-[#6D9773]/10"
              />

              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400">
                kg
              </span>
            </div>
            {errors.weight && (
              <p className="text-red-500">{errors.weight.message}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-gray-500">
              Reps
            </label>

            <input
              {...register(`sets.${index}.reps`, {
                required: "Enter reps",
              })}
              type="number"
              placeholder="10"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#6D9773] focus:ring-4 focus:ring-[#6D9773]/10"
            />
            {errors.reps && (
              <p className="text-red-500">{errors.reps.message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Set;
