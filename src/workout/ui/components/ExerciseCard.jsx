import React from "react";

const ExerciseCard = ({ exercise, index, deleteExercise }) => {
  return (
    <div className="rounded-2xl border border-[#6D9773]/20 bg-white p-5 shadow-sm">
      {/* Exercise Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0C3B2E] text-sm font-bold text-white">
            {index + 1}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Exercise
            </p>

            <h2 className="mt-1 text-xl font-bold text-[#0C3B2E]">
              {exercise.exerciseName}
            </h2>
          </div>
        </div>

       <div className="flex gap-3">
         <span className="rounded-2xl bg-[#FFBA00]/20 px-4 py-3 text-xs font-semibold text-[#8A6500]">
          {exercise.sets.length} Sets
        </span>
        <button onClick={() => deleteExercise(exercise)} className="border-2 py-2 px-4 border-[#0C3B2E] bg-[#0C3B2E] text-white rounded-xl font-medium cursor-pointer transition hover:bg-white hover:text-[#0C3B2E]">Delete</button>
       </div>
      </div>

      {/* Sets */}
      <div className="mt-6">
        <div className="grid grid-cols-[60px_1fr_1fr] gap-3 border-b border-gray-100 pb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
          <span>Set</span>
          <span>Weight</span>
          <span>Reps</span>
        </div>

        <div className="divide-y divide-gray-100">
          {exercise.sets.map((set, setIndex) => (
            <div
              key={set.id || setIndex}
              className="grid grid-cols-[60px_1fr_1fr] items-center gap-3 py-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6D9773]/15 text-sm font-bold text-[#0C3B2E]">
                {setIndex + 1}
              </div>

              <div>
                <span className="font-semibold text-[#0C3B2E]">
                  {set.weight}
                </span>
                <span className="ml-1 text-xs text-gray-400">kg</span>
              </div>

              <div>
                <span className="font-semibold text-[#0C3B2E]">
                  {set.reps}
                </span>
                <span className="ml-1 text-xs text-gray-400">reps</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;