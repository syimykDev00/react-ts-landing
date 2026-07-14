
export interface Course {
    id: number;
    title: string;
    description: string;
}

export const courses: Course[] = [
    {
        id: 1,
        title: "Frontend",
        description: "React, TypeScript, современные UI"
    },

    {
        id: 2,
        title: "Backend",
        description: "Python, базы данных, API"
    },

    {
        id: 3,
        title: "UI/UX",
        description: "Создание удобных интерфейсов"
    }

]