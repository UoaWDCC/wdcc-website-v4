import { cn } from "@/libs/utils";

import { Category } from "../_data/events.data";

type EventCategoryFilterProps = {
    categories: Category[];
    selectedCategory: string;
    filterByCategory: (category: string) => () => void;
};

export default function EventCategoryFilter({
    categories,
    selectedCategory,
    filterByCategory,
}: EventCategoryFilterProps) {
    return (
        <div className="flex items-center justify-start gap-[18px]">
            <p className="leading-none font-semibold">Filter by category</p>
            <div className="hidden items-center justify-start gap-3 md:flex">
                {categories.map((category) => (
                    <button
                        key={category.name}
                        className={cn(
                            "border-gray-250 bg-gray-20 flex cursor-pointer items-start justify-start gap-2.5 overflow-hidden rounded-full px-5 py-2 leading-none font-semibold text-gray-800 transition duration-500 will-change-auto hover:rotate-3 hover:bg-gray-50 hover:duration-200",
                            category.colors,
                            selectedCategory === category.name && "border-2"
                        )}
                        onClick={filterByCategory(category.name)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <select
                className="flex md:hidden"
                onChange={(e) => {
                    filterByCategory(e.target.value)();
                }}
            >
                {categories.map((category) => (
                    <option key={category.name} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
