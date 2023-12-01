import { Comment } from "@/components/crime/comment";
import Map from "@/components/maps";
import FooterStatistics from "@/components/statistics/footer-statistics-";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Page({ params }: { params: { crime_id: string } }) {
    return <div>
        <Map />
        <div className="bg-gray-900">
            <div className="bg-red-600 w-full">
                <p className="text-left pl-8 py-4 text-xl md:text-2xl text-white font-bold">
                    ÚLTIMOS SUCESOS REPORTADOS
                </p>
            </div>

            <div className="bg-gray-200 w-full mt-4 p-8">
                <div className="flex items-center">
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-[#999999] font-bold text-xl md:text-2xl">
                                TÍTULO DE LA DENUNCIA
                            </h1>

                            <p className="text-[#999999] font-bold">
                                dd/mm/aaaa hh:mm:ss
                            </p>
                        </div>

                        <p className="text-[#999999] text-justify">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquam distinctio totam consectetur aperiam cumque quia animi architecto, quam, delectus iste nemo! Sit, saepe architecto sapiente blanditiis laudantium sed in?
                            Corrupti sed illo, tenetur facere porro distinctio commodi, rerum molestiae voluptate ab cum ut quia, magni quo maxime iure provident perferendis voluptatibus ducimus nobis natus! Fugiat, cupiditate dolore! Exercitationem, dicta.
                            {" "} <a href="#">Continuar leyendo....</a>
                        </p>

                        <h1 className="text-[#999999] font-bold text-xl md:text-2xl">
                            TIPO DE CRIMEN
                        </h1>

                        <div className="flex gap-2 align-top">
                            <Image
                                src={'/assets/images/brujijeros.png'}
                                alt="image"
                                width={64}
                                height={16}
                            />

                            <div className="text-[#999999] text-justify">
                                <p>Que es un carterista?</p>
                                <p className="">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo consectetur odio, distinctio repudiandae corporis molestias fugiat beatae alias error voluptatibus earum libero, id aperiam illum quia ut velit, dolor autem.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center">
                            <h1 className="text-[#999999] font-bold text-xl md:text-2xl">
                                COMPARTIR EN:
                            </h1>  
                            <svg
                                width="50"
                                height="50"
                                viewBox="0 0 50 50"
                                fill="#999999"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ borderRadius: '50%', border: '2px solid #999999' }}
                            >
                                <path
                                    d="M25 0C11.193 0 0 11.193 0 25c0 11.023 8.511 20.064 19.416 24.858V32.184h-5.34v-6.177h5.34v-4.754c0-5.281 3.136-8.196 7.963-8.196 2.309 0 4.564.413 4.564.413v5.043h-2.57c-2.53 0-3.313 1.571-3.313 3.185v3.835h5.635l-.904 6.177h-4.73V49.95C40.257 48.496 50 38.09 50 25c0-13.807-11.193-25-25-25"
                                    fill="#fff"
                                />
                            </svg>
                            <svg
                                width="50"
                                height="50"
                                viewBox="0 0 50 50"
                                fill="#999999"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ borderRadius: '50%', border: '2px solid #999999' }}
                            >
                                <path
                                    d="M25 0C11.193 0 0 11.193 0 25c0 13.807 11.193 25 25 25 13.807 0 25-11.193 25-25C50 11.193 38.807 0 25 0zm11.626 19.302c.012.26.012.519.012.779 0 7.961-6.065 17.161-17.161 17.161-3.41 0-6.575-.996-9.227-2.721.479.056.955.085 1.452.085 2.834 0 5.445-.96 7.507-2.576-2.655-.056-4.881-1.794-5.66-4.185.373.07.747.112 1.135.112.549 0 1.097-.07 1.625-.203-2.827-.566-4.96-3.06-4.96-6.075.83.469 1.773.8 2.767.993-.982-.598-1.723-1.538-2.075-2.658-.373.654-.56 1.392-.56 2.194 0 1.513.764 2.85 1.933 3.635-.712-.022-1.384-.218-1.972-.541v.057c0 2.115 1.505 3.877 3.506 4.28-.366.1-.747.155-1.135.155-.276 0-.54-.028-.805-.084.566 1.788 2.209 3.095 4.152 3.13-1.518 1.202-3.429 1.924-5.504 1.924-.358 0-.712-.022-1.065-.084 1.96 1.253 4.282 1.982 6.786 1.982 8.137 0 12.58-6.747 12.58-12.58 0-.191 0-.377-.012-.566.86-.616 1.6-1.386 2.192-2.258-.807.359-1.68.616-2.584.753z"
                                    fill="#fff"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="w-[10px] bg-gray-400 mx-8 h-80"></div>
                    <div className="flex-1 flex flex-col gap-4">
                        <h1 className="text-[#999999] font-bold text-xl md:text-2xl">
                            COMENTARIOS
                        </h1>

                        <ScrollArea className="h-60 text-[#999999]">
                            <div className="flex flex-col gap-4">
                                <Comment
                                    description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam necessitatibus obcaecati ab maxime quas iure minima recusandae ex sit, veniam tenetur consequatur dignissimos praesentium perferendis facilis reprehenderit incidunt nesciunt alias!"}
                                    photoPath="/assets/images/carterista.png"
                                />
                                <Comment
                                    description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam necessitatibus obcaecati ab maxime quas iure minima recusandae ex sit, veniam tenetur consequatur dignissimos praesentium perferendis facilis reprehenderit incidunt nesciunt alias!"}
                                    photoPath="/assets/images/carterista.png"
                                />
                                <Comment
                                    description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam necessitatibus obcaecati ab maxime quas iure minima recusandae ex sit, veniam tenetur consequatur dignissimos praesentium perferendis facilis reprehenderit incidunt nesciunt alias!"}
                                    photoPath="/assets/images/carterista.png"
                                />
                                <Comment
                                    description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam necessitatibus obcaecati ab maxime quas iure minima recusandae ex sit, veniam tenetur consequatur dignissimos praesentium perferendis facilis reprehenderit incidunt nesciunt alias!"}
                                    photoPath="/assets/images/carterista.png"
                                />
                                <Comment
                                    description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam necessitatibus obcaecati ab maxime quas iure minima recusandae ex sit, veniam tenetur consequatur dignissimos praesentium perferendis facilis reprehenderit incidunt nesciunt alias!"}
                                    photoPath="/assets/images/carterista.png"
                                />
                            </div>
                        </ScrollArea>

                        <div>
                            <Textarea />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterStatistics />
    </div>
}


export async function generateStaticParams() {
    // retrieve data from backend and pass crime ids
    const crimes_ids = [
        { crime_id: 'abcd' },
        { crime_id: 'bcde' },
        { crime_id: 'cdef' },
        { crime_id: 'defg' },
        { crime_id: 'efgh' },
    ]

    return crimes_ids;
}
