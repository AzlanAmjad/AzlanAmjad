import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function WorkHighlight() {
    return (
        <div className="flex flex-col justify-start items-center gap-y-3">
            <div className="w-fit">
                <p className="text-2xl font-semibold inline-block pr-2 pl-2">
                    Work
                </p>
                <Link to="/work">
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        size="1x"
                        className="text-white opacity-80 mb-[0.1rem] hover:translate-x-1 transition ease-in-out duration-500"
                    />
                </Link>
            </div>
            <div className="w-auto flex flex-wrap justify-center items-center">
                <div className="p-5 m-2 border-2 border-opacity-50 border-white rounded-lg">
                    <p className="text-xl font-semibold">Software Engineer</p>
                    <p>Energy Toolbase</p>
                    <p className="font-light">October 2024 - Present</p>
                </div>
                <div className="p-5 m-2 border-2 border-opacity-50 border-white rounded-lg">
                    <p className="text-xl font-semibold">
                        University of Calgary
                    </p>
                    <p>Bachelor of Science in Software Engineering</p>
                    <p className="font-light">September 2019 - April 2024</p>
                </div>
                <div className="p-5 m-2 border-2 border-opacity-50 border-white rounded-lg">
                    <p className="text-xl font-semibold">
                        Software Engineer Intern
                    </p>
                    <p>Garmin</p>
                    <p className="font-light">May 2022 - August 2023</p>
                </div>
            </div>
        </div>
    );
}

export default WorkHighlight;
