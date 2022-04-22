import { inputStyles } from "../../styles/input"
import twitter from "../../../assets/svg/twitter.svg"
import github from "../../../assets/svg/github.svg"
import instagram from "../../../assets/svg/instagram.svg"
import discord from "../../../assets/svg/discord.svg"
import dribbble from "../../../assets/svg/dribbble.svg"
import behance from "../../../assets/svg/behance.svg"
import linkedin from "../../../assets/svg/linkedin.svg"
import stackoverflow from "../../../assets/svg/stackoverflow.svg"
import twitch from "../../../assets/svg/twitch.svg"
import youtube from "../../../assets/svg/youtube.svg"
import { layoutStyles } from "../../styles/layout"

const styles = {
    socialIcon: `mb-5 h-6 w-6 mr-3`,
}

const Socials = () => {
    return <div className={layoutStyles.container}>
        <p className="mb-7 font-medium">Your socials</p>
        <div className="flex items-center">
            <img src={twitter.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput} placeholder="site.com/name">
                <label className={inputStyles.label}>twitter.com/username/</label>
                <input className={inputStyles.ghostInput} type="text" placeholder="" />
            </div>
        </div>
        <div className="flex items-center">
            <img src={github.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput} placeholder="site.com/name">
                <label className={inputStyles.label}>twitter.com/username/</label>
                <input className={inputStyles.ghostInput} type="text" placeholder="" />
            </div>
        </div>
        <div className="flex items-center">
            <img src={linkedin.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput} placeholder="site.com/name">
                <label className={inputStyles.label}>twitter.com/username/</label>
                <input className={inputStyles.ghostInput} type="text" placeholder="" />
            </div>
        </div>
        <div className="flex items-center">
            <img src={behance.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput} placeholder="site.com/name">
                <label className={inputStyles.label}>twitter.com/username/</label>
                <input className={inputStyles.ghostInput} type="text" placeholder="" />
            </div>
        </div>
        <div className="flex items-center">
            <img src={twitch.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput} placeholder="site.com/name">
                <label className={inputStyles.label}>twitter.com/username/</label>
                <input className={inputStyles.ghostInput} type="text" placeholder="" />
            </div>
        </div>
        <div className="flex items-center">
            <img src={instagram.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput} placeholder="site.com/name">
                <label className={inputStyles.label}>twitter.com/username/</label>
                <input className={inputStyles.ghostInput} type="text" placeholder="" />
            </div>
        </div>
        <div className="flex items-center">
            <img src={stackoverflow.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput} placeholder="site.com/name">
                <label className={inputStyles.label}>twitter.com/username/</label>
                <input className={inputStyles.ghostInput} type="text" placeholder="" />
            </div>
        </div>
        <div className="flex items-center">
            <img src={dribbble.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput} placeholder="site.com/name">
                <label className={inputStyles.label}>twitter.com/username/</label>
                <input className={inputStyles.ghostInput} type="text" placeholder="" />
            </div>
        </div>
        <div className="flex items-center">
            <img src={discord.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput} placeholder="site.com/name">
                <label className={inputStyles.label}>twitter.com/username/</label>
                <input className={inputStyles.ghostInput} type="text" placeholder="" />
            </div>
        </div>
        <div className="flex items-center">
            <img src={youtube.src} alt="" className={styles.socialIcon} />
            <div className={inputStyles.socialInput} placeholder="site.com/name">
                <label className={inputStyles.label}>twitter.com/username/</label>
                <input className={inputStyles.ghostInput} type="text" placeholder="" />
            </div>
        </div>
    </div>
}

export default Socials