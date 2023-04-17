import { DEFAULT_HEIGHT_LOGO_NAV, DEFAULT_WITH_LOGO_NAV } from '@/main.config';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface LogoAppProps {
    logoType: string;
    hasLink: boolean;
    link?: string;
    width?: number;
    height?: number;
}
const LogoApp: React.FC<LogoAppProps> = ({
    logoType,
    hasLink = false,
    link = '/',
    width = DEFAULT_WITH_LOGO_NAV,
    height = DEFAULT_HEIGHT_LOGO_NAV,
}) => {
    if (hasLink) {
        return (
            <Link href={link}>
                <a className="border-none">
                    <Image
                        width={width}
                        height={height}
                        alt="Logo Qosqomposta"
                        src={logoType}
                    />
                </a>
            </Link>
        );
    } else {
        return (
            <Image width={width} height={height} alt="Logo Qosqomposta" src={logoType} />
        );
    }
};

export default LogoApp;
