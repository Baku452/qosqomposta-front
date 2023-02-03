/* eslint-disable @next/next/no-img-element */
import { BANNER_TALLER_HOME, TITLE_BLOG_HOME } from 'main.config';
import Image from 'next/image';
import React from 'react';

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
