const app = document.getElementById("app")
const root = ReactDOM.createRoot(app)

const data = [
    {
        siteProject: "Conquering Responsive Layouts",
        heroSection: {
            heroTitle: "Responsive layouts don’t have to be a struggle",
            heroDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            heroCTA: {
                href: "#",
                text: "I want to learn"
            },
            heroImg: 
                {src: "hero-img.jpg", alt: "a sketch of 3 website layouts"}
        }

    },
    {
        siteProject: "TOEIC Vocab Trainer",
        heroSection: {
            heroTitle: "TOEIC Vocab doesn't have to be a struggle",
            heroDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            heroCTA: {
                href: "#",
                text: "I want to learn"
            },
            heroImg: 
                {src: "hero-img.jpg", alt: "a sketch of 3 website layouts"}
        }

    }
]

function Hero(props) {
    const {heroSection} = props
    const { heroTitle, heroDescription, heroCTA, heroImg } = heroSection
    return (
        <div className="hero">
            <div className="container flex justify-between">

                <div className="hero__text">                
                    <h1>{heroTitle}</h1>
                    <p>{heroDescription}</p>
                    <a className="btn" href={heroCTA.href}>{heroCTA.text}</a>                
                </div>
                <img className="hero__img" src={"./img/" + heroImg.src} alt={heroImg.alt} />

            </div> {/* / div.container */}
        </div>
    )
}

function App() { 
    return (
    <>
        <Hero {...data[0]}/>
    </>
)
}

root.render(<App />)