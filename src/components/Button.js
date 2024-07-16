
const PrimaryButton = ({name}) => {
    return (
        <button
            className="px-4 py-2 text-white text-extrabold bg-primary rounded-full duration-150 hover:bg-primaryDark1 active:bg-white active:text-y active:border-primary"
        >
            {name}
        </button>
    );
};

const SecondaryButton = ({ name }) => {
    return (
        <button
            className="px-4 py-2 text-white bg-primary rounded-full duration-150 hover:bg-indigo-500 active:bg-indigo-700"
        >
            {name}
        </button>
    );
};
export  {PrimaryButton, SecondaryButton};