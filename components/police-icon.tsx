'use client'
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface PersonIconProps {
    className?: string
}

const PoliceIcon = ({
                        className
                    }: PersonIconProps) => {
    return (
        <Image
            src="/person/police.svg"
            alt="Persona con vestido"
            width={100}
            height={100}
            className={cn(
                "w-10 h-10 text-white",
                className
            )}
        />
    );
}

export default PoliceIcon;