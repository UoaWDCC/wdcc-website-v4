interface ExecCardTextProps {
    name: string;
    role: string;
    description: string;
    joined: string;
}

export default function ExecCardText({ name, role, description, joined }: ExecCardTextProps) {
    return (
        <>
            <h3 className="text-lg font-bold">{name}</h3>
            <h4 className="text-sm font-bold text-blue-600">{role}</h4>
            <p className="whitespace-pre-line text-xs">{description}</p>
            <p className="text-xs italic text-gray-500">{joined}</p>
        </>
    );
}
