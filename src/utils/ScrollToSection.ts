
const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);

    if (!section) return;
    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
}
export default scrollToSection;