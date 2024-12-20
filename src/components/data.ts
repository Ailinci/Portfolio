import { Datita } from "./Types";


export const datita: Datita = {
    hero: {
        titleInto: "Hola, soy",
        titleName: "Ailín Ojeda Pytel",
        description: "Desarrolladora Frontend especializada en crear experiencias digitales únicas y memorables"
    },
    about: {
        about: "Sobre mi",
        pDescriptionTop: "Soy una desarrolladora frontend apasionada por crear experiencias web únicas y memorables. Me especializo en React y disfruto transformando ideas complejas en interfaces intuitivas y atractivas.",
        pDescriptionBottom: "Con más de 3 años de experiencia en el desarrollo web, trabajé en diversos proyectos que van desde landings de productos y servicios, hasta microservicios intermediarios.",
        cards: [
            {
                id: 1,
                title: "+3",
                body: "Años de experiencia"
            },
            {
                id: 2,
                title: "+15",
                body: "Desarrollos"
            }
        ],
        skilsTitle: "Mis Habilidades",
        skilsArray: ["Git", "Firebase", "MongoDB", "NestJs", "Redux", "NextJs", "SASS", "Tailwind", "Kotilin", "AEM", "AWS"]
    },
    projects: {
        title: "Mis Proyectos",
        description: "Una selección de mis trabajos más recientes en desarrollo y aplicaciones.",
        cards: [
            {
                id: 1,
                title: "Planning Poker ",
                description: "Una web-app cortita y al pié para poder puntuar tareas en ceremonias de scrum",
                tags: ["React", "TypeScript", "Firebase", "Tailwind"],
                github: "https://github.com/Ailinci/planning-poker",
                demo: "https://my-planning-date.vercel.app/"
            },
            {
                id: 2,
                title: "Porfolio",
                description: "Mi portfolio personal ",
                tags: ["React", "TypeScript"],
                github: "https://github.com/Ailinci/Portfolio",
                demo: "https://ailin-ojeda-pytel.vercel.app/"
            }
        ]
    },
    contact: {
        title: "Contacto",
        description: "¿Tienes un proyecto en mente? ¡Me encantaría escucharlo! Envíame un mensaje y me pondré en contacto contigo lo antes posible.",
        buttonlbl: "Enviar mensaje"
    },
    footer: {
        body: "Hecho con ❤️ por Ailín Ojeda Pytel"
    }
};
export default datita;