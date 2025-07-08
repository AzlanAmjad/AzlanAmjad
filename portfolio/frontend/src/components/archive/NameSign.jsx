import Light from "./Light";

function NameSign() {
    return (
        <div className="group -rotate-12 relative z-10 bg-darkRed rounded-3xl w-64 h-28 sm:w-88 sm:h-36 mt-6 mb-10 sm:mb-14 flex justify-center items-center">
            <div className="bg-red w-10/12 h-4/6 rounded-xl flex justify-center items-center">
                <h1 className="text-4xl sm:text-5xl font-semibold pb-1 text-shadow-long shadow-darkBlue">
                    Azlan Amjad
                </h1>
            </div>

            <Light className="top-[5%] left-[0%]" />
            <Light className="top-[30%] left-[0%]" />
            <Light className="top-[55%] left-[0%]" />
            <Light className="top-[80%] left-[0%]" />

            <Light className="top-[5%] right-[0%]" />
            <Light className="top-[30%] right-[0%]" />
            <Light className="top-[55%] right-[0%]" />
            <Light className="top-[80%] right-[0%]" />

            <Light className="top-[0%] left-[11%]" />
            <Light className="top-[0%] left-[23%]" />
            <Light className="top-[0%] left-[35%]" />
            <Light className="top-[0%] left-[47%]" />
            <Light className="top-[0%] left-[59%]" />
            <Light className="top-[0%] left-[71%]" />
            <Light className="top-[0%] left-[83%]" />

            <Light className="bottom-[0%] left-[11%]" />
            <Light className="bottom-[0%] left-[23%]" />
            <Light className="bottom-[0%] left-[35%]" />
            <Light className="bottom-[0%] left-[47%]" />
            <Light className="bottom-[0%] left-[59%]" />
            <Light className="bottom-[0%] left-[71%]" />
            <Light className="bottom-[0%] left-[83%]" />
        </div>
    );
}

export default NameSign;
