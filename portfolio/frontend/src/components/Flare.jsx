// Generic Flare component for stylish background flares
function Flare({ className, style }) {
    return (
        <div
            className={
                "pointer-events-none select-none absolute rounded-full backdrop-blur-3xl opacity-10 " +
                className
            }
            style={style}
        />
    );
}

export default Flare;
