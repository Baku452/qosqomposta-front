import { fetchCustomerProfile } from '@/actions/customer.actions';
import { State } from '@/reducers/rootReducer';
import Image from 'next/image';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Profile: React.FC = () => {
  const customerData = useSelector((state: State) => state.customerApp.customerProfile);

  type ProfileFormValues = {
    name: string;
    lastName: string;
    motherLastName: string;
    dni: number | string;
    phone: string;
    address: string;
    district: string;
    addressReference: string;
  };

  const { register, setValue } = useForm<ProfileFormValues>();

  useEffect(() => {
    if (customerData) {
      setValue('name', customerData.name ?? '--');
      setValue('lastName', customerData.last_name ?? '--');
      setValue('motherLastName', customerData.mother_last_name ?? '--');
      setValue('dni', customerData.document_identity ?? '--');
      setValue('phone', customerData.phoneNumber ?? '--');
      setValue('address', customerData.family?.address ?? '--');
      setValue('district', customerData.family?.district ?? '--');
      setValue('addressReference', customerData.family?.reference ?? '--');
    }
  }, [customerData, setValue]);
  const appUser = useSelector((state: State) => state.appUser);

  const dispatch = useDispatch();

  const handleFetchProfile = async () => {
    await fetchCustomerProfile(appUser.uid)(dispatch);
  };
  useEffect(() => {
    handleFetchProfile();
  }, [appUser.uid]);
  return (
    <>
      <section className="flex justify-between gap-28 rounded-lg bg-white p-5">
        <div className="basis-[15rem] px-5">
          <Image
            className="m-auto mb-4"
            alt="User profile"
            width={500}
            height={500}
            src={appUser.photoURL ? appUser.photoURL : '/images/defaultAvatar.png'}
          />
        </div>
        <form className="flex-1">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              {...register('name', {
                value: customerData?.name ?? '--',
              })}
              disabled
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>

          <div className="mb-4 flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-600"
              >
                Apellido Paterno
              </label>
              <input
                type="text"
                id="lastName"
                {...register('lastName', {
                  value: customerData?.last_name ?? '--',
                })}
                disabled
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="motherLastName"
                className="block text-sm font-medium text-gray-600"
              >
                Apellido Materno
              </label>
              <input
                type="text"
                id="motherLastName"
                {...register('motherLastName', {
                  value: customerData?.mother_last_name ?? '--',
                })}
                disabled
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          </div>
          <div className="mb-4 flex gap-4">
            <div className="flex-1">
              <label htmlFor="dni" className="block text-sm font-medium text-gray-600">
                DNI
              </label>
              <input
                type="text"
                id="dni"
                {...register('dni', {
                  value: customerData?.document_identity ?? '--',
                })}
                disabled
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                Número de celular
              </label>
              <input
                type="text"
                id="phone"
                {...register('phone', {
                  value: customerData?.phoneNumber ?? '--',
                })}
                disabled
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          </div>
        </form>
      </section>
      <section className="mb-5 mt-5 justify-between rounded-lg bg-white p-5">
        <div className="mb-4 flex gap-4">
          <div className="flex-1">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
              Dirección
            </label>
            <input
              type="text"
              id="address"
              {...register('address', {
                value: customerData?.family?.address ?? '--',
              })}
              disabled
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
              Distrito
            </label>
            <input
              type="text"
              id="district"
              {...register('district', {
                value: customerData?.family?.district ?? '--',
              })}
              disabled
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
            Referencia de Dirección
          </label>
          <input
            type="text"
            id="addressReference"
            {...register('addressReference', {
              value: customerData?.family?.reference ?? '--',
            })}
            disabled
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
      </section>
    </>
  );
};

export default Profile;
