import "./portfolio.css"





export const Portfolio = () => {

    const data = {
        "projects": [
            {
                "tipo": "Front-End",
                "titulo": "Movies-Signle-Page-Navigation-Api-Consumming",
                "img": "https://res.cloudinary.com/diuscdbil/image/upload/v1713229446/movies_fmmlhj.png",
                "description": "TA single-page application developed using HTML, CSS, and JavaScript to dynamically display movie information fetched from an API. Features include a responsive layout, live search, detail modal pop-ups, and pagination, highlighting expertise in AJAX",
                "tech": ["HTML ", "CSS  ", "JavaScript "]
            },
            {
                "tipo": "Front-End",
                "titulo": "Pokedex-Api-consumming",
                "img": "https://res.cloudinary.com/diuscdbil/image/upload/v1713229446/pokeapi_usupe2.png",
                "description": "A front-end application that allows users to explore Pokémon data interactively. Built with HTML, CSS, and JavaScript, this project utilizes AJAX for consuming the PokéAPI to retrieve and display Pokémon characteristics dynamically.",
                "tech": ["HTML ", "CSS  ", "JavaScript "]
            },
            {
                "tipo": "Front-End",
                "titulo": "Paper-Cisors-Rock",
                "img": "https://res.cloudinary.com/diuscdbil/image/upload/v1713229446/PCR_ghlhc0.png",
                "description": "This interactive front-end version of the classic game Paper, Scissors, Rock is built using HTML, CSS , and JavaScript. The game mechanics are implemented with extensive DOM manipulation techniques to dynamically update the game’s visuals and outcomes based on the player's choices.",
                "tech": ["HTML ", "CSS  ", "JavaScript"]
            },
            {
                "tipo": "Full-Stack",
                "titulo": "FinanFilm-Admin-Bussines-Platform",
                "img": "https://res.cloudinary.com/diuscdbil/image/upload/v1713229446/finanfilms_tumeaw.png",
                "description": "A first foray into Java and Spring Boot, this platform offers a responsive Bootstrap-enhanced interface for film finance management, combining backend logic with frontend design.",
                "tech": ["HTML ", "CSS   ", "Java ", "Springboot ", "Bootstrap "]
            }
        ]
    }
    return (
        <section id="porfolio">

            <div className="d-flex placer">
                {
                    data["projects"].map(proyect => {
                        return (
                            <div class="contenedor">
                            <div className="frente">
        
                                <div className="card h-100 d-flex flex-column">
                                    <div className="restrictor">
                                        <img className="w-100" src={proyect.img} alt={proyect.description}></img>
                                    </div>
        
                                    <div class="card-body d-flex flex-column cardDown">
                                        <h4 class="cardTitutlo">{proyect.titulo}</h4>
                                       
                                        <p class="card-text">S{proyect.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="content">
                                <h1 >{proyect.tipo}</h1>
                                <h1>{proyect.tech}</h1>
                            </div>
                        </div>
                        )
                    })
                }
            </div>


        </section>
    )
}