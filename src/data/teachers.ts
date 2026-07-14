
export interface Teachers {
    id: number;
    name: string;
    position: string
    image: string
}

export const teachers: Teachers[] = [
    {
        id: 1,
        name: "Александр Смирнов",
        position: "Lead Frontend Developer",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 2,
        name: "Екатерина Иванова",
        position: "Senior Python Developer",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 3,
        name: "Дмитрий Соколов",
        position: "UI / UX Designer",
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        id: 4,
        name: "Анна Петрова",
        position: "Senior Mobile Developer",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        id: 5,
        name: "Максим Кузнецов",
        position: "DevOps Engineer",
        image: "https://randomuser.me/api/portraits/men/51.jpg"
    },
    {
        id: 6,
        name: "Ольга Васильева",
        position: "Cyber Security Engineer",
        image: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
        id: 7,
        name: "Илья Морозов",
        position: "React & TypeScript Mentor",
        image: "https://randomuser.me/api/portraits/men/14.jpg"
    },
    {
        id: 8,
        name: "Мария Новикова",
        position: "Full Stack Developer",
        image: "https://randomuser.me/api/portraits/women/25.jpg"
    }
]