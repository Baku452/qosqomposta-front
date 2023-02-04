/* eslint-disable @next/next/no-img-element */
import { BANNER_TALLER_HOME, TITLE_BLOG_HOME } from 'main.config';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TALLERES_PATH } from 'routes.config';

const TalleresSectionHome: React.FC = () => {
    return (
        <section className="pt-0 lg:pt-10 relative ">
            <div className="max-w-6xl m-auto relative block">
                <h2 className="text-center text-lg lg:text-3xl title mb-5">
                    {TITLE_BLOG_HOME}
                </h2>
                <div className="h-1 mx-auto bg-yellowQ w-24 mb-10 mt-4 rounded" />
            </div>
            <div className="relative">
                <div className="absolute w-full h-full flex items-center justify-center">
                    <button className="shadow-2xl">
                        <Link href={TALLERES_PATH}>
                            <a className="btn btn-primary shadow-2xl !font-black !p-5 !text-2xl">
                                Conocer Más
                            </a>
                        </Link>
                    </button>
                </div>
                <img
                    className="w-full object-contain h-full"
                    alt="TalleresQ"
                    src={BANNER_TALLER_HOME}
                />
            </div>
        </section>
    );
};

export default TalleresSectionHome;
