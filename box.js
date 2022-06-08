// Em uma classe:
// atributos da classe (que são variáveis)
// métodos da classe (que são functions)

class Box {
    constructor()
    {
        // atributos da classe
        this.x = 100;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }

    show()
    {
        rect(this.x, this.y, this.width, this.height);
    }

    set_speed(velocity)
    {
        this.x = this.x + velocity;
    }
}