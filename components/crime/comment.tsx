import Image from "next/image"

export function Comment({
    description,
    photoPath
}: {
    description: string,
    photoPath: string
}) {
    return <div>
        <Image
            src={photoPath}
            className="float-left mr-4"
            alt="a profile image"
            width={40}
            height={40}

        />
        <p>
            {description}
        </p>
    </div>
}

