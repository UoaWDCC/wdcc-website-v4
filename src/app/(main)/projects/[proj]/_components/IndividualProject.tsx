import { Project } from "@/types/models/Project";
import { getTechnologySvgWithName } from "@/assets/svg/technologies";
import Duo from "@/components/primitives/Duo";
import { toTitleCase } from "@/utils/misc";
import TeamMemberCard from "./TeamMemberCard";

type IndividualProjectProps = {
    project: Project;
};

const IndividualProject = ({ project }: IndividualProjectProps) => {
    const technologies = project.technologies.map((tech) => {
        return getTechnologySvgWithName(tech);
    });
    const briefImage = project.brief.image;

    return (
        <div className="flex flex-col py-16">
            <Duo image={briefImage && { src: briefImage.src, alt: briefImage.alt }}>
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold">{project.name.extended}</h3>
                    <br />
                    <h4 className="text-md font-semibold">{project.client}</h4>
                    <br />
                    <p>{project.brief.description}</p>
                </div>
            </Duo>
            <div className="mt-8 flex flex-col gap-4">
                <h2 className="text-center text-3xl font-semibold md:text-left">Technologies</h2>
                <hr />
                <div className="flex flex-wrap gap-1">
                    {technologies.map((tech) => {
                        console.log(tech);
                        if (!tech) return;
                        return (
                            <div key={tech.name} className="flex w-28 flex-col items-center justify-center gap-2 py-2">
                                {<tech.component className="h-12 w-12" />}
                                <p className="overflow-clip text-center">{tech.name}</p>
                            </div>
                        );
                    })}
                </div>
                <hr />
            </div>
            <div className="mt-8 flex flex-col items-center gap-8">
                <h2 className="text-center text-3xl font-semibold md:text-left">Meet the project team</h2>
                <div className="flex flex-col justify-center gap-4 md:flex-row">
                    <TeamMemberCard
                        variant={{ role: "manager" }}
                        name={project.team.manager.name}
                        role="Project Manager"
                        image={project.team.manager.image}
                    />
                    <TeamMemberCard
                        variant={{ role: "techlead" }}
                        name={project.team.techlead.name}
                        role="Tech Lead"
                        image={project.team.techlead.image}
                    />
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {project.team.members.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            variant={{ role: member.role }}
                            name={member.name}
                            role={toTitleCase(member.role)}
                            image={member.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndividualProject;
