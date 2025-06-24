export const EmptyListPlaceholder = ({ children }: { children: string }) => (
    <div className="flex h-96 items-center justify-center">
        <p className="text-2xl text-gray-500">{children}</p>
    </div>
);
