/* eslint-disable @next/next/no-img-element */
import {
  IMAGE_404_ERROR,
  NAV_LINKS_ERROR_PAGE,
} from '@/components/molecules/ErrorPage/utilsErrorPage';
import { NOT_FOUND_STATUS } from '@/constants/statusCodes';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { MdNavigateNext } from 'react-icons/md';

export default function Custom404() {
  return (
    <div className="min-h-[calc(100vh_-_17rem)]">
      <div className="m-auto flex max-w-6xl flex-col items-center justify-between pt-[88px] lg:flex-row">
        <div className="relative order-2 items-center lg:order-1">
          <h1 className="absolute left-1/2 right-1/2 top-0 z-20 m-auto w-fit -translate-x-1/2 text-8xl text-yellowQ opacity-50 lg:text-[200px]">
            {NOT_FOUND_STATUS}
          </h1>
          <div className="bottom-0 pr-20 pt-10 lg:pt-40">
            <img src={IMAGE_404_ERROR} alt="Page not found" />
          </div>
        </div>
        <div className="order-1 mb-10 basis-5/12 lg:order-2">
          <h2 className="mb-5 text-6xl text-yellowQ">Opps !</h2>
          <h3 className="text-3xl font-normal">Página no encontrada</h3>
          <nav className="mt-10 flex flex-col text-2xl">
            {NAV_LINKS_ERROR_PAGE.map(navlink => (
              <Link
                key={navlink.key}
                href={navlink.path}
                className="flex w-fit items-center transition-colors hover:text-yellowQ"
              >
                <MdNavigateNext className="" />
                {navlink.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
