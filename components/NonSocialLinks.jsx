import { getLinksLinks } from "../utils/data";
import { Link } from 'next/link';
const NonSocialLinks = () => {
    const getNonSocialLinksData = getLinksLinks();
    
    if (getNonSocialLinksData) {
        return ( <section className=" grid justify-center">
            {getNonSocialLinksData.map((link) => {
                return <a className=" " href={link.url} key={link.id}>
                     <button className="button max-w-md" >
                    <p>{link.title}</p>
                </button>
                </a>
            })}
         </section> )
    }
    
    return <p>Social Links</p>
}

export default NonSocialLinks;