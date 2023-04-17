/* eslint-disable @next/next/no-img-element */
import {
    IMAGE_404_ERROR,
    NAV_LINKS_ERROR_PAGE,
} from '@/components/molecules/ErrorPage/utilsErrorPage';
import { NOT_FOUND_STATUS } from '@/constants/statusCodes';
import Image from 'next/image';
import Link from 'next/link';
import { MdNavigateNext } from 'react-icons/md';

export default function Custom404() {
    return (
        <div className="min-h-[calc(100vh_-_17rem)]">
            <div className="flex flex-col lg:flex-row max-w-6xl m-auto pt-[88px] justify-between items-center">
                <div className="relative items-center order-2 lg:order-1">
                    <h1
                        className="text-yellowQ left-1/2 right-1/2 -translate-x-1/2 text-8xl lg:text-[200px] w-fit m-auto top-0 z-20 absolute opacity-50
                        "
                    >
                        {NOT_FOUND_STATUS}
                    </h1>
                    <div className="bottom-0 pt-10 lg:pt-40 pr-20">
                        <img src={IMAGE_404_ERROR} alt="Page not found" />
                    </div>
                </div>
                <div className="basis-5/12 order-1 lg:order-2 mb-10">
                    <h2 className="text-6xl text-yellowQ mb-5">Opps !</h2>
                    <h3 className="text-3xl font-normal">Página no encontrada</h3>
                    <nav className="flex flex-col text-2xl mt-10">
                        {NAV_LINKS_ERROR_PAGE.map(navlink => (
                            <Link key={navlink.key} href={navlink.path}>
                                <a className="w-fit transition-colors flex items-center hover:text-yellowQ">
                                    <MdNavigateNext className="" />
                                    {navlink.name}
                                </a>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
