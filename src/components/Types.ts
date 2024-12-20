
export interface Hero {
    titleInto: string;
    titleName: string;
    description: string;
}

export interface About {
    about: string;
    pDescriptionTop: string;
    pDescriptionBottom: string;
    cards: Cards[];
    skilsTitle: string;
    skilsArray: Array<string>
}

export interface Projects {
    title: string;
    description: string;
    cards: Array<CardsProjects>
}

export interface Contact {
    title: string;
    description: string;
    buttonlbl: string
}
export interface Footer {
    body: string
}

export interface Cards {
    title: string
    id: number;
    body: string
}

export interface CardsProjects {
    id: number;
    title: string;
    description: string;
    tags: Array<string>;
    github: string;
    demo: string
}

export interface Datita {
    contact: Contact;
    projects: Projects;
    about: About;
    hero: Hero;
    footer: Footer
}
