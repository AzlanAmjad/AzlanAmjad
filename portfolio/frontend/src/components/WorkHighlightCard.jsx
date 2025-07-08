function WorkHighlightCard({ heading_one, heading_two, heading_three }) {
    return (
        <div className="w-64 flex flex-col items-start p-5 m-2 border-2 border-white/50 rounded-lg hover:border-white/75 transition ease-in-out duration-300">
            <p className="text-xl font-semibold">{heading_one}</p>
            <p>{heading_two}</p>
            <p className="font-extralight text-sm">{heading_three}</p>
        </div>
    );
}

export default WorkHighlightCard;
