

const PrimaryButton = ({ name, action,isActive }) => {

    return (
        <button
            className={`px-8 py-2 mx-1 font-bold rounded-full duration-150 ${isActive
                ? "text-primary bg-white ring-offset-2 ring-2 ring-primary active:text-white active:bg-primary"
                    : "text-white bg-primary hover:bg-primaryDark1 active:bg-white active:text-primary active:ring-offset-2 active:ring-2 active:ring-primary"
                }`}
            onClick={action}
        >
            {name}
        </button>
    );
};



export  {PrimaryButton};

