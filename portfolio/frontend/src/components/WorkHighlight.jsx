import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import WorkHighlightCard from "./WorkHighlightCard";

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
                        className="text-white opacity-80 mb-[0.1rem] hover:translate-x-1 transition ease-in-out duration-1000"
                    />
                </Link>
            </div>
            <div className="w-fit flex flex-wrap justify-center items-center">
                <WorkHighlightCard
                    heading_one="Software Engineer"
                    heading_two="Energy Toolbase"
                    heading_three="October 2024 - Present"
                />
                <WorkHighlightCard
                    heading_one="University of Calgary"
                    heading_two="B.Sc. in Software Engineering"
                    heading_three="September 2019 - April 2024"
                />
                <WorkHighlightCard
                    heading_one="Software Engineer Intern"
                    heading_two="Garmin"
                    heading_three="May 2022 - August 2023"
                />
            </div>
        </div>
    );
}

export default WorkHighlight;
