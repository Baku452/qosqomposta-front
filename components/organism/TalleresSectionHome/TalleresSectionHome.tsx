import { TITLE_BLOG_HOME } from 'main.config';
import React from 'react';

const TalleresSectionHome: React.FC = () => {
    return (
        <section className="py-10 max-w-6xl m-auto">
            <h2 className="text-center text-3xl title mb-5">{TITLE_BLOG_HOME}</h2>
            <div className="h-1 mx-auto bg-yellowQ w-24 mb-10 mt-4 rounded" />
        </section>
    );
};

export default TalleresSectionHome;
