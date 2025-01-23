interface EventCategoryFilterProps {
    filterByCategory: (category: string) => () => void;
}

export default function EventCategoryFilter({ filterByCategory }: EventCategoryFilterProps) {
    return (
        <div className="justify-start items-center gap-[18px] flex">
            <p className="font-semibold leading-none">Filter by category</p>
            <div className="justify-start items-center gap-3 flex">
                <div className="px-5 py-2 bg-gray-20 rounded-[999px] border-2 border-gray justify-start items-start gap-2.5 flex overflow-hidden transition will-change-auto duration-500 hover:duration-200 hover:bg-gray-50 hover:rotate-3 cursor-pointer">
                    <button className="font-semibold leading-none text-gray-800" onClick={filterByCategory("")}>All</button>
                </div>
                <div className="px-5 py-2 bg-blue-100 rounded-[999px] border-2 border-blue-400 justify-start items-start gap-2.5 flex overflow-hidden transition will-change-auto duration-500 hover:duration-200 hover:bg-blue-150 hover:rotate-3 cursor-pointer">
                    <button className="font-semibold leading-none text-blue-800" onClick={filterByCategory("Workshop")}>Workshops</button>
                </div>
                <div className="px-5 py-2 bg-yellow-100 rounded-[999px] border-2 border-yellow-400 justify-start items-start gap-2.5 flex overflow-hidden transition will-change-auto duration-500 hover:duration-200 hover:bg-yellow-150 hover:rotate-6 cursor-pointer">
                    <button className="font-semibold leading-none text-yellow-800" onClick={filterByCategory("Competition")}>Competitions</button>
                </div>
                <div className="px-5 py-2 bg-purple-100 rounded-[999px] border-2 border-purple-400 justify-start items-start gap-2.5 flex overflow-hidden transition will-change-auto duration-500 hover:duration-200 hover:bg-purple-150 hover:rotate-[9] cursor-pointer">
                    <button className="font-semibold leading-none text-purple-800" onClick={filterByCategory("Social")}>Socials</button>
                </div>
            </div>
        </div>
    )
}
