export interface Event {
    communities:     EventCommunity[];
    speakers:        Speaker[];
    talks:           Talks;
    sponsors:        Partner[];
    partners:        Partner[];
    faq:             FAQ[];
    activate_agenda: boolean;
}

export interface EventCommunity {
    link:  string;
    id:    number;
    title: string;
    image: string;
}

export interface FAQ {
    question: string;
    answer:   string;
}

export interface Partner {
    name:  string;
    link:  string;
    image: string;
}

export interface Speaker {
    role:        string;
    company:     string;
    bio:         string;
    social_link: string;
    id:          number;
    title:       string;
    image:       string;
}

export interface Talks {
    principal:   FrontendElement[];
    invite:      FrontendElement[];
    frontend:    FrontendElement[];
    communities: FrontendElement[];
}

export interface FrontendElement {
    speaker: Speaker;
    room:    Room;
    hour:    string;
    id:      number;
    title:   string;
    image:   boolean;
}

export enum Room {
    Communities = "communities",
    Frontend = "frontend",
    Invite = "invite",
    Principal = "principal",
}