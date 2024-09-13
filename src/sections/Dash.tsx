import { HeaderSection } from "./Header";
import data from "./data.json";

export const Dash = () => {
    return (
        <>
            <HeaderSection />
            <div className="dark-dashboard">
                <div className="flex justify-center">
                    {data.map((item, index) => (
                        <div key={index} className="bg-zinc-700 text-white p-4 rounded-md max-w-[700px] mx-9 mt-9 mb-4 shadow-md">
                            <div className="flex justify-between mb-4 ">
                                <h2 className="text-4xl font-bold">{item.name}</h2>
                                <div className="text-3xl font-medium">{item.dob}</div>
                            </div>
                            <div className="flex justify-between mb-4">
                                <div className="text-2xl font-medium">Aadhar ID:</div>
                                <div className="text-2xl font-medium">{item.adharId}</div>
                            </div>
                            <div className="flex justify-between mb-4">
                                <div className="text-2xl font-medium">Wallet Address:</div>
                                <div className="text-2xl font-medium">{item.walletAddress}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Dash;