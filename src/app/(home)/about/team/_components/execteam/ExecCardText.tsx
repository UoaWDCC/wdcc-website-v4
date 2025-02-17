interface ExecCardTextProps {
    name: string;
    role: string;
    description: string;
    joined: string;
}

export default function ExecCardText({ name, role, description, joined }: ExecCardTextProps) {
    return (
        <>
            <h3 className="text-lg font-bold leading-none">{name}</h3>
            <h4 className="font-bold text-blue-600 leading-none">{role}</h4>
            <p className="whitespace-pre-line text-xs leading-tight">{description}</p>
            <p className="text-xs italic text-gray-500 leading-none">{joined}</p>
        </>
    );
}
