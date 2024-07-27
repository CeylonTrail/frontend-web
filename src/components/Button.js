const PrimaryButton = ({ name, action, isActive }) => {
  return (
    <button
      onClick={action}
      className={`px-8 py-2 text-white font-bold bg-primary rounded-full duration-150 hover:bg-primaryDark1 active:bg-white active:text-primary active:ring-offset-2 active:ring-2 active:ring-primary ${
        !isActive ? "cursor-not-allowed opacity-50" : ""
      }`}
      disabled={!isActive}
    >
      {name}
    </button>
  );
};

const SecondaryButton = ({ name, action, isActive }) => {
  return (
    <button
      onClick={action}
      className={`px-8 py-2 font-bold bg-white text-primary rounded-full duration-150 hover:bg-primaryDark1 active:bg-primary active:text-white ring-offset-2 ring-2 ring-primary ${
        !isActive ? "cursor-not-allowed opacity-50" : ""
      }`}
      disabled={!isActive}
    >
      {name}
    </button>
  );
};

export { PrimaryButton, SecondaryButton };
