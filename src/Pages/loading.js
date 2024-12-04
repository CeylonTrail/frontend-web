import loading from '../assets/img/loading.gif';

export default function Loading() {
    return (
        <div className="w-screen h-screen bg-white opacity-70 z-500 items-center flex justify-center flex-col ">
            <img src={loading} alt="loading" className="w-1/5" />
            <p>Loading ...</p>
        </div>
    );
}
