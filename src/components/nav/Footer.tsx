type FooterProps = {
    className?: string;
};

export default function Footer({ className = "" }: FooterProps) {
    return <footer className={`w-full bg-blue-600 ${className}`}>Footer</footer>;
}
