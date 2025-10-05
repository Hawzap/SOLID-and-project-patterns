// У цьому прикладі ми додаємо функціонал не у основному класі Weapon, а роздробляємо його на інші сутності

class Weapon {
    constructor(damage, health) {
        this.damage = damage;
        this.health = health;
    }
    attack() {}
}

class Pistol extends Weapon {
    attack() {
        console.log(`Attacked by pistol, caused ${this.type} damage`);
    }
}

class MachineGun extends Weapon {
    attack() {
        console.log(`Attacked by machine gun, caused ${this.type} damage`);
    }
}
