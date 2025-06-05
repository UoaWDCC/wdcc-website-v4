import { TableOfContents, TableOfContentsProps } from "./TableOfContents";

type ArticleContentProps = {
    children: React.ReactNode;
    variant: TableOfContentsProps["variant"];
};

export const ArticleContent = ({ children, variant }: ArticleContentProps) => {
    return (
        <div id="blog" className="grid grid-cols-5 gap-4">
            <div className="col-span-5 flex flex-col gap-5 xl:col-span-4">{children}</div>
            <TableOfContents variant={variant} />
        </div>
    );
};
