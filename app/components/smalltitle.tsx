interface SmallerTitleProps {
    heading: string;
}

const SmallerTitle: React.FC<SmallerTitleProps> = ({ heading }) => {
    return (
        <p className='text-[1.75em] md:text-[2em] font-medium mt-10 tracking-tight leading-none text-gray-200'>
            {heading}
        </p>
    );
};

export default SmallerTitle;
