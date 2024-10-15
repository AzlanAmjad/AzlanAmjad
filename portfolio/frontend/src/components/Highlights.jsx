import WorkHighlight from "./WorkHighlight";
import SummaryHighlight from "./SummaryHighlight";

function Highlights() {
    return (
        <div className="flex flex-col items-center justify-center gap-y-10">
            <p className="text-3xl font-semibold">Highlights</p>
            <SummaryHighlight />
            <WorkHighlight />
        </div>
    );
}

export default Highlights;
