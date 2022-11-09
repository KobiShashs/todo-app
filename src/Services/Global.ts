class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        todos: "https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/tasks",
    }
}

class ProductionGlobals extends Globals{
    public urls = {
        todos: "http://localhost:8008/api/todos/",
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals() : new DevelopmentGlobals();

export default globals;