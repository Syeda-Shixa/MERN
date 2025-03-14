export const SearchBar = () => {
  return (
    <div className="pt-2">
      <div className="w-96 flex border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2 ">
        <input
          id="default-search"
          className="w-full bg-black-400 text-white border-none outline-none"
          placeholder="Search"
          required
        />
        <button className="bg-black-400 text-gray-400 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg
  className="w-4 h-4"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M21 21l-4.35-4.35M16.5 10a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
  />
</svg>
        </button>
      </div>
    </div>
  );
};
