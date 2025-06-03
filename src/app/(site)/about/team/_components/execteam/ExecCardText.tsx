interface ExecCardTextProps {
    name: string;
    role: string;
    description: string;
    joined: string;
}

export default function ExecCardText({ name, role, description, joined }: ExecCardTextProps) {
    return (
        <>
            <h3 className="text-lg leading-none font-bold">{name}</h3>
            <h4 className="leading-none font-bold text-blue-600">{role}</h4>
            <p className="text-xs leading-tight whitespace-pre-line">{description}</p>
            <p className="text-xs leading-none text-gray-500 italic">{joined}</p>
        </>
    );
}
