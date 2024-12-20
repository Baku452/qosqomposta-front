/* eslint-disable @next/next/no-img-element */
import { BANNER_TALLER_HOME, TITLE_BLOG_HOME } from 'main.config';
import Link from 'next/link';
import React from 'react';
import { TALLERES_PATH } from '@/routes/routes.config';

const TalleresSectionHome: React.FC = () => {
  return (
    <section className="relative pt-0 lg:pt-10">
      <div className="relative m-auto block max-w-6xl">
        <h2 className="title mb-5 text-center text-lg lg:text-3xl">{TITLE_BLOG_HOME}</h2>
        <div className="mx-auto mb-10 mt-4 h-1 w-24 rounded bg-yellowQ" />
      </div>
      <div className="relative">
        <div className="absolute flex h-full w-full items-center justify-center">
          <button className="shadow-2xl">
            <Link
              href={TALLERES_PATH}
              className="btn btn-primary !p-5 !text-2xl !font-black shadow-2xl"
            >
              Conocer Más
            </Link>
          </button>
        </div>
        <img
          className="h-full w-full object-contain"
          alt="TalleresQ"
          src={BANNER_TALLER_HOME}
        />
      </div>
    </section>
  );
};

export default TalleresSectionHome;
