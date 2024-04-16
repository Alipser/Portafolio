import "./skills.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"



export const Skills = () => {

    const actualSkill = ["Programming Lenguages", "Data Bases", "FrameWorks", "Tools"];
    const [currentCarrousel, setCurrentCarrousel] = useState(actualSkill[0]);
    const data = {
        "Programming Lenguages": [
            {
                name: "Html",
                url: "https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/Lenguajes/html"
            },
            {
                name:"CSS",
                url:" https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/Lenguajes/css "
            },
            {
                name:"Java",
                url:" https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/Lenguajes/Java"
            },
            {
                name:"JavaScript",
                url:" https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/Lenguajes/Javascript "
            },
            {
                name:"TypeScript",
                url:" https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/Lenguajes/Typescript"
            },

            {
                name:"Python",
                url:" https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/Lenguajes/python "
            },
            {
                name:"SQL",
                url:" https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/Lenguajes/sql"
            },



        ],
        "Data Bases": [
            {
                name: "MySQL",
                url: "https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/DataBases/MySQL"
            },
            {
                name: "PostgreSQL",
                url: "https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/DataBases/PostgreSQL"  
            },
            {
                name: "Mongo",
                url: "https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/DataBases/MongoDB"  
            },
            {
                name: "FireBase",
                url: "https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/DataBases/FireBase"  
            },
            {
                name: "BigQuery",
                url: "https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/DataBases/Bigquery"  
            }


        ],
        "FrameWorks": [
            {
                name: "SpringBoot",
                url: "https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/Frameworks/springboot"  
            },
            {
                name: "Angular",
                url: " https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/Frameworks/angular"  
            }

        ],
        "Tools": [
            {
                name: "React",
                url: " https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/Tools/react"  
            },

            {
                name: "Node",
                url: " https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/Tools/node"  
            },
            {
                name: "Docker",
                url: " https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/Tools/docker"  
            },
            {
                name: "git",
                url: " https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/Tools/git"  
            },

            {
                name: "github",
                url: " https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/Tools/github"  
            },
            {
                name: "cloudinary",
                url: " https://res.cloudinary.com/dsynbhrxh/image/upload/f_auto,q_auto/v1/PortafolioRomario/Tools/cloudinary"  
            }

        ]

    }
    function moverEstado() {
        let index = actualSkill.indexOf(currentCarrousel);
        if (index - 1 < 0) {
            index = actualSkill.length - 1
            setCurrentCarrousel(actualSkill[index])
        } else {
            setCurrentCarrousel(actualSkill[index - 1])
        }
    }

    function atrasarEstado() {
        let index = actualSkill.indexOf(currentCarrousel);
        if (index + 1 > actualSkill.length - 1) {
            index = 0
            setCurrentCarrousel(actualSkill[index])
        } else {
            setCurrentCarrousel(actualSkill[index + 1])
        }
    }

    const propPrueba ={
        backgroundImage: "url(?)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
    }

    

    return (
        <section id="skills">
            <div className="containerSkills">
                <div className="titleSkills">
                    <h2>Skills Set</h2>
                    <h3>{currentCarrousel}</h3>
                </div>
                <aside className="buttonPlacer" onClick={moverEstado} id="back">
                    <FontAwesomeIcon icon={faArrowLeft} />

                </aside>
                <div className="iconsplacer">
                    {
                        data[actualSkill[actualSkill.indexOf(currentCarrousel)]].map(element => {
                            console.log(element)
                            propPrueba.backgroundImage = `url(${(element.url)})`
                            return (
                                <div key={`elemento${element.url}`} className="cardM">
                                    <div  className="imageCard">
                                        <img src={element.url} alt={element.name}></img>
                                        
                                    </div>
                                    <div className="cardName"> 
                                        {element.name}
                                    </div>

                                    
                                </div>
                            )
                        })

                       
                    }
                   

                </div>
                <aside className="buttonPlacer" onClick={atrasarEstado} id="next">
                    <FontAwesomeIcon icon={faArrowRight} />
                </aside>
            </div>
        </section>
    );
}