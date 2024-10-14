function Light({ className }) {
    return (
        <div
            className={
                "group-hover:scale-150 transition-transform duration-700 ease-in-out absolute w-[0.85rem] h-[0.85rem] sm:w-4 sm:h-4 rounded-full bg-yellow blur-[3px] " +
                className
            }
        ></div>
    );
}

export default Light;
