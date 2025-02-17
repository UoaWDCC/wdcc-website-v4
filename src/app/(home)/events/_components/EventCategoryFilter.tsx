import { cn } from "@/libs/utils";

import { Category } from "../_data/events.data";

interface EventCategoryFilterProps {
    categories: Category[];
    selectedCategory: string;
    filterByCategory: (category: string) => () => void;
}

export default function EventCategoryFilter({
    categories,
    selectedCategory,
    filterByCategory,
}: EventCategoryFilterProps) {
    return (
        <div className="flex items-center justify-start gap-[18px]">
            <p className="font-semibold leading-none">Filter by category</p>
            <div className="flex items-center justify-start gap-3">
                {categories.map((category) => (
                    <button
                        key={category.name}
                        className={cn(
                            "flex cursor-pointer items-start justify-start gap-2.5 overflow-hidden rounded-full border-gray-250 bg-gray-20 px-5 py-2 font-semibold leading-none text-gray-800 transition duration-500 will-change-auto hover:rotate-3 hover:bg-gray-50 hover:duration-200",
                            category.colors,
                            selectedCategory === category.name && "border-2"
                        )}
                        onClick={filterByCategory(category.name)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
