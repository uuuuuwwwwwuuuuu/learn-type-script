"use strict";
class User {
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.concat(skillOrSkills);
        }
    }
    getSkills() {
        return this.skills;
    }
}
const user = new User();
// user.addSkill('Dev');
// user.addSkill(['HTML', 'CSS', 'TS', 'JS']);
console.log(user.getSkills());
