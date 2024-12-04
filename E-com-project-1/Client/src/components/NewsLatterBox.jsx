import { useState } from "react";

function NewsLatterBox() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <div className="text-center">
            <h1 className="text-2xl font-medium text-gray-800">
                Subscribe now & get 20% off
            </h1>
            <p className="text-gray-500 mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
            </p>
            <form
                onSubmit={handleSubmit}
                className="w-full sm:w-1/2  flex items-center  gap-3 mx-auto my-6 border pl-3"
            >
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email..."
                    className="w-full sm:flex-1 outline-none"
                    required
                />
                <button
                    type="submit"
                    className="bg-black text-white text-xs px-10 py-4 "
                >
                    SUBSCRIBE
                </button>
            </form>
        </div>
    );
}

export default NewsLatterBox;

{
    /* <div className="flex justify-center mt-5">
    <input
        type="email"
        placeholder="Enter your email address"
        className="border-2 border-gray-300 p-2"
    />
    <button className="bg-black text-white p-2">Subscribe</button>
</div>; */
}
