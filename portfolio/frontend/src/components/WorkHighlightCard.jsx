function WorkHighlightCard({ heading_one, heading_two, heading_three }) {
    return (
        <div className="w-64 flex flex-col items-start p-5 m-2 rounded-xl border-2 border-white/60 bg-night shadow-xl hover:shadow-2xl hover:border-white transition-all duration-300">
            <p className="text-xl font-semibold text-white/90">
                {heading_one}
            </p>
            <p className="text-white/80">{heading_two}</p>
            <p className="font-extralight text-sm text-white/60">
                {heading_three}
            </p>
        </div>
    );
}

export default WorkHighlightCard;
