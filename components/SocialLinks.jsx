import { getSocialLinks } from "../utils/data";
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import snapchat from '../images/snapchat.svg'
import Image from "next/image";
const SocialLinks = () => {
    const getSocialLinksData = getSocialLinks();
    
    console.log(getSocialLinksData);

    if (getSocialLinksData) {
        return ( <section className="flex justify-center p-3 items-center">
            {getSocialLinksData.map((link) => {
            switch (link.title) {
                case 'Facebook':
                    return <a href={link.url}> <Image src={facebook} alt={'Facebook'} height="79" width="79" /> </a>
                case 'Twitter':
                    return <a href={link.url}> <Image src={twitter} alt={'Twitter'} height="79" width="79" /> </a>
                case 'Instagram':
                    return <a href={link.url}> <Image src={instagram} alt={'Instagram'} height="79" width="79" /> </a>
                case 'Snapchat':
                    return <a href={link.url}> <Image src={snapchat} alt={'Snapchat'} height="79" width="79" /> </a>
                default:
                    return <p>Link not found</p>
            }
            })}
            </section> )
    }

    return <p>You have no social links</p>
}

export default SocialLinks;