import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Nav = () => {
    return (
        <div className="w-full p-2 bg-white dark:bg-[#0a192f] border-b-1 text-[#848e9f] border-[#848e9f]">
            <div className="center-container flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
                {/* معلومات الاتصال */}
                <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-sm sm:text-[1.05rem]'>
                    <a className="flex items-center gap-1.5 sm:border-r-2 border-[#848e9f] sm:pr-3 pr-0">
                        <FaPhoneAlt />
                        <span className="hidden xs:inline">+012 546 3444</span>
                    </a>
                    <a className="flex items-center gap-1.5">
                        <IoMailOutline />
                        <span className="hidden xs:inline">Medinova@gmail.com</span>
                    </a>
                </div>

                {/* روابط وسائل التواصل الاجتماعي */}
                <div className='flex gap-3 items-center text-sm sm:text-[1.05rem]'>
                    <a className="hover:text-blue-600"><FaFacebookF /></a>
                    <a className="hover:text-black"><FaTwitter /></a>
                    <a className="hover:text-blue-600"><FaLinkedinIn /></a>
                    <a className="hover:text-pink-400"><FaInstagram /></a>
                    <a className="hover:text-red-500"><FaYoutube /></a>
                </div>
            </div>
        </div>
    )
}
export default Nav