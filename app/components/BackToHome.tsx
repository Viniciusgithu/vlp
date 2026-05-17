
import { Button } from "./ui/button";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";


export default function BackToHome() {
    const { t } = useLanguage();

    return (
        <Link href="/">
            <Button variant="ghost" className="hover:bg-green-800/50 border border-green-700/50 duration-300 hover:text-white rounded-full cursor-pointer">
                <BsArrowLeft className="mr-2" />
                <span>{t('backHome')}</span>
            </Button>
        </Link>
    );
}
