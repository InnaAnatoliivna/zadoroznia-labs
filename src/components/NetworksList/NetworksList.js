import { socialNetworks } from "../../utils/links";


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
        </>
    )
};

export default NetworkList;