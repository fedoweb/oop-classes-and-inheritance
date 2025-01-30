export default class Character {
    constructor(name, type) {
        const validValue = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"]
        
        if (typeof(name) !== "string" || name.length < 2 || name.length > 10) {
            throw new Error("Имя должно быть строкой длиной от 2 до 10 символов.")
        }

        if (!validValue.includes(type)) {
            throw new Error('Тип персонажа должен быть одним из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
        }
        
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;

    }
}