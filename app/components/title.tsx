import BubbleText from "./Bubbletext";

interface TitleProps {
    first: string;
    second: string;
}

const Title: React.FC<TitleProps> = ({ first, second }) => {
    return (
        <div className="uppercase text-[3.5em] sm:text-[5em] md:text-[6em] font-semibold font-poppins leading-none poppinsfont">
            {first}{" "}
            <span className="lighterpoppins inline-block">
                <BubbleText word={second} />
            </span>
        </div>
    );
};

export default Title;
