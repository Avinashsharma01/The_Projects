/* eslint-disable react/prop-types */
const UnorderList = ({
    Template,
    id,
    banner,
    invoice,
    font,
    invitation,
    account,
}) => {
    return (
        <>
            <ul className="flex w-full flex-col items-start list-none space-y-8 py-5 px-5">
                <li className="mt-8 hover:text-[#129d8e]">
                    {Template} {id} {banner} {invoice} {font} {invitation}{" "}
                    {account} Sublist
                </li>
                <li className="hover:text-[#129d8e]">
                    {Template} {id} {banner} {invoice} {font} {invitation}{" "}
                    {account} Sublist
                </li>
                <li className="hover:text-[#129d8e]">
                    {Template} {id} {banner} {invoice} {font} {invitation}{" "}
                    {account}Sublist
                </li>
                <li className="hover:text-[#129d8e]">
                    {Template} {id} {banner} {invoice} {font} {invitation}{" "}
                    {account} Sublist
                </li>
                <li className="hover:text-[#129d8e]">
                    {Template} {id} {banner} {invoice} {font} {invitation}{" "}
                    {account} Sublist
                </li>
                <li className="hover:text-[#129d8e]">
                    {Template} {id} {banner} {invoice} {font} {invitation}{" "}
                    {account} Sublist
                </li>
            </ul>
        </>
    );
};

export default UnorderList;
