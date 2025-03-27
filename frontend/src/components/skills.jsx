const skillsData = [
    {
        category: "Programming Languages",
        skills: [
            { name: "C++", icon: "devicon-cplusplus-plain" },
            { name: "C", icon: "devicon-c-plain" },
            { name: "Python", icon: "devicon-python-plain" },
            { name: "JavaScript", icon: "devicon-javascript-plain" },
            { name: "PHP", icon: "devicon-php-plain" },
        ],
    },
    {
        category: "Data & DevOps",
        skills: [
            { name: "MySQL", icon: "devicon-mysql-plain" },
            { name: "MongoDB", icon: "devicon-mongodb-plain" },
            { name: "Docker", icon: "devicon-docker-plain" },
        ],
    },
    {
        category: "Web & App Development",
        skills: [
            { name: "React", icon: "devicon-react-original" },
            { name: "Flutter", icon: "devicon-flutter-plain" },
            { name: "Node.js", icon: "devicon-nodejs-plain" },
            { name: "HTML", icon: "devicon-html5-plain" },
            { name: "CSS", icon: "devicon-css3-plain" },
        ],
    },
    {
        category: "Tools & Technologies",
        skills: [
            { name: "GitHub", icon: "devicon-github-original" },
            { name: "Linux", icon: "devicon-linux-plain" },
            { name: "WordPress", icon: "devicon-wordpress-plain" },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="min-h-screen bg-[#121212] text-white px-10 pt-24 pb-6">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#FF8C00] mb-8">Skills</h2>
                <p className="text-lg text-gray-300 mb-12">Here are some of the technologies and tools I work with.<br />More in the way ☺️ </p>
                

                {skillsData.map((category, index) => (
                    <div key={index} className="mb-12">
                        <h3 className="text-3xl font-semibold text-[#FF8C00] mb-6">{category.category}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {category.skills.map((skill, i) => (
                                <div key={i} className="flex flex-col items-center bg-[#1E1E1E] p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
                                    <i className={`${skill.icon} text-7xl text-[#FF8C00]`}></i>
                                    <p className="mt-4 text-lg">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
