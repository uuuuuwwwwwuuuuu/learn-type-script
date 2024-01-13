class User {
    skills: string[];

    addSkill(skill: string): void;
    addSkill(skills: string[]): void;
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        } else {
            this.skills.concat(skillOrSkills);
        }
    }

    getSkills(): string[] {
        return this.skills;
    }
}

function run(distance: string): string;
function run(distance: number): number;
function run(distance: number | string): string | number {
    return typeof distance === "number" ? 1 : ''
}
