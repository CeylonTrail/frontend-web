
const PrimaryButton = ({name}) => {
    return (
        <button
            className="px-8 py-2 text-white font-bold bg-primary rounded-full duration-150 hover:bg-primaryDark1 active:bg-white active:text-primary active:ring-offset-2 active:ring-2 active:ring-primary"
            // onClick={action}
        >
            {name}
        </button>
    );
};

const SecondaryButton = ({ name }) => {
    return (
        <button
            className="px-8 py-2 active:text-white  font-bold active:bg-primary rounded-full duration-150 hover:bg-primaryDark1 bg-white text-primary ring-offset-2 ring-2 ring-primary"
            
        >
            {name}
        </button>
    );
};
export  {PrimaryButton, SecondaryButton};