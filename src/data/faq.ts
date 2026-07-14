
export interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

export const faqData: FaqItem[] = [
     {
        id: 1,
        question: "Нужен ли опыт программирования?",
        answer:
            "Нет. Мы начинаем обучение с самых основ и постепенно переходим к реальным проектам."
    },
    {
        id: 2,
        question: "Сколько длится обучение?",
        answer:
            "Средняя продолжительность курса составляет 6–8 месяцев в зависимости от выбранного направления."
    },
    {
        id: 3,
        question: "Вы помогаете с трудоустройством?",
        answer:
            "Да. После окончания курса мы помогаем подготовить резюме, GitHub, LinkedIn и пройти собеседования."
    },
    {
        id: 4,
        question: "Какие технологии изучаются?",
        answer:
            "HTML, CSS, JavaScript, TypeScript, React, Git, REST API и другие современные инструменты."
    }
]

