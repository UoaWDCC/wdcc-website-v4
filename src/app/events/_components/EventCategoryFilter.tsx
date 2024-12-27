interface EventCategoryFilterProps {
    filterByCategory: (category: string) => () => void;
}

export default function EventCategoryFilter({ filterByCategory }: EventCategoryFilterProps) {
    return (
        <div className="justify-start items-center gap-[18px] flex">
            <p className="font-semibold leading-none">Filter by category</p>
            <div className="justify-start items-center gap-3 flex">
                <div className="px-6 py-2 bg-slate-200 rounded-[999px] border-2 border-slate-500 justify-start items-start gap-2.5 flex overflow-hidden">
                    <button className="font-semibold leading-none" onClick={filterByCategory("")}>All</button>
                </div>
                <div className="px-6 py-2 bg-blue-100 rounded-[999px] border-2 border-blue-400 justify-start items-start gap-2.5 flex overflow-hidden">
                    <button className="font-semibold leading-none" onClick={filterByCategory("Workshop")}>Workshops</button>
                </div>
                <div className="px-6 py-2 bg-yellow-100 rounded-[999px] border-2 border-yellow-400 justify-start items-start gap-2.5 flex overflow-hidden">
                    <button className="font-semibold leading-none" onClick={filterByCategory("Competition")}>Competitions</button>
                </div>
                <div className="px-6 py-2 bg-purple-100 rounded-[999px] border-2 border-purple-400 justify-start items-start gap-2.5 flex overflow-hidden">
                    <button className="font-semibold leading-none" onClick={filterByCategory("Social")}>Socials</button>
                </div>
            </div>
        </div>
    )
}
