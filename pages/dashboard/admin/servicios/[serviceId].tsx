import { SingleService } from '@/features/SingleService/SingleService';
import { SERVICES_ADMIN } from '@/routes/routes.config';
import { WasteManagementService } from '@/types/wasteManagement';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { FaBoxes } from 'react-icons/fa';

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_QOSQOMPOSTA_BACKEND_URL_API}/waste-management`,
  );

  const wasteManagementServices = await response.json();

  const paths = wasteManagementServices.map((service: WasteManagementService) => ({
    params: { serviceId: service._id },
  }));

  return {
    paths: paths,
    fallback: true, // false or "blocking"
  };
};

export const getStaticProps: GetStaticProps<{
  singleService: WasteManagementService | null;
}> = async ({ params }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_QOSQOMPOSTA_BACKEND_URL_API}/waste-management/${params?.serviceId}`,
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const singleService: WasteManagementService = await response.json();

    return { props: { singleService } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { singleService: null } };
  }
};

export default function WasteManagementServicePage({
  singleService,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <nav className="bg-white w-fit px-10 rounded-2xl">
        <ul className="flex items-center text-[1.5rem]">
          <li className="flex items-center">
            <FaBoxes className="text-greenQ mr-2" size={32} />
            <Link href={SERVICES_ADMIN} className=" text-greenQ font-bold">
              Servicios Q
            </Link>
          </li>
          <li className="flex items-center">
            <span className="px-4">{'>'}</span>
            <h1 className="font-paragraph text-[1.5rem]">{singleService?.name}</h1>
          </li>
        </ul>
      </nav>
      {singleService && <SingleService service={singleService} />}
    </>
  );
}
