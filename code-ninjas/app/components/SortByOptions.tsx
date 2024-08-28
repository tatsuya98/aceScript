import * as React from "react";
type SortByProps = {
  setSortBy(value: string): void;
};
export default function SortByOptions({
  setSortBy,
}: SortByProps): React.JSX.Element {
  const handleChange = (e: any) => {
    setSortBy(e.target.value);
  };
  return (
    <fieldset className="flex flex-col gap-10 p-10 bg-#070815 border-solid  border-2 border-gray-400 text-white max-h-[400px] mt-16 rounded-lg">
      <h3 className="font-bold">Sort by</h3>
      <div className="flex gap-4">
        <input
          type="radio"
          name="sortBy"
          id="easy"
          value="Easy"
          onClick={handleChange}
        />
        <label htmlFor="easy">Easiest</label>
      </div>
      <div className="flex gap-4">
        <input
          type="radio"
          name="sortBy"
          id="hard"
          value="Hard"
          onClick={handleChange}
        />
        <label htmlFor="hard">Hardest</label>
      </div>
      <div className="flex gap-4">
        <input
          type="radio"
          name="sortBy"
          id="complete"
          value="Completed"
          onClick={handleChange}
        />
        <label htmlFor="complete">Completed</label>
      </div>
      <div className="flex gap-4">
        <input
          type="radio"
          name="sortBy"
          id="incomplete"
          value="Incomplete"
          onClick={handleChange}
        />
        <label htmlFor="incomplete">Incompleted</label>
      </div>
    </fieldset>
  );
}
