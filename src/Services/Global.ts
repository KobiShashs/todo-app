class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        admin : "http://localhost:8080/api/admin/",
        todos: "http://localhost:8080/api/tasks/",
        users:"http://localhost:8080/api/users/tasks/",
        auth:"http://localhost:8080/api/auth/"

    }
}

class ProductionGlobals extends Globals{
    public urls = {
        admin : "http://localhost:8080/api/admin/",
        todos: "https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/tasks",
        users:"http://localhost:8080/api/users/tasks/",
        auth:"http://localhost:8080/api/auth/"
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals() : new DevelopmentGlobals();

export default globals;