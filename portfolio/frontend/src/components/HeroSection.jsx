import NameSign from "./NameSign";
import profilePhoto from "../assets/images/profile_photo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
    return (
        <div className="flex flex-wrap justify-center gap-x-56 gap-y-5 mb-9">
            <div className="py-14 text-2xl">
                <p>Hi, my name is</p>
                <NameSign />
                <p className="inline">I&apos;m a </p>
                <p className="font-bold inline">Software Engineer</p>
            </div>
            <div className="flex flex-col gap-y-5 items-center">
                <img
                    className="min-w-60 min-h-60 w-60 h-60 rounded-full"
                    src={profilePhoto}
                    alt="Azlan Amjad's portrait"
                />
                <div className="flex justify-center gap-x-5">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="text-white cursor-pointer transition ease-in-out duration-500 hover:scale-110 hover:text-lightBlue"
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/azlanamjad/"
                            )
                        }
                    />
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        size="2x"
                        className="text-white cursor-pointer transition ease-in-out duration-500 hover:scale-110 hover:text-lightBlue"
                        onClick={() =>
                            window.open("mailto:azlanamjad_123@hotmail.com")
                        }
                    />
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="2x"
                        className="text-white cursor-pointer transition ease-in-out duration-500 hover:scale-110 hover:text-lightBlue"
                        onClick={() =>
                            window.open("https://www.github.com/azlanamjad")
                        }
                    />
                </div>
                <FontAwesomeIcon
                    icon={faArrowUp}
                    size="2x"
                    className="animate-bounce text-white opacity-80"
                />
                <p className="font-semibold -mt-4 text-xl">Get in touch!</p>
            </div>
        </div>
    );
}

export default HeroSection;
