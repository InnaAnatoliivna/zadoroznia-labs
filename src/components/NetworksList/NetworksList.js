import { socialNetworks } from "../../utils/links";
import { TfiEmail } from "react-icons/tfi";


const NetworkList = () => {
    return (
        <>
            {socialNetworks.map(({ name, link, icon }, index) =>
                <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                >
                    {icon}
                </a>
            )}
            <a href="mailto:zadoroznia.labs@outlook.com">
                <TfiEmail />
            </a>
        </>
    )
};

export default NetworkList;