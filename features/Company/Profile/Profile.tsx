import { fetchCompanyProfile } from '@/actions/company.actions';
import Tooltip from '@/components/Tooltip/Tooltip';
import ChangePassword from '@/features/ChangePassword/ChangePassword';
import EmailVerified from '@/features/EmailVerified/EmailVerified';
import { EDITING_ADDRESS_INFO } from '@/main.config';
import { State } from '@/reducers/rootReducer';
import { Company } from '@/types/company.types';
import { auth } from '@/utils/firebase';
import Image from 'next/image';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaInfoCircle } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Profile: React.FC = () => {
  const customerData = useSelector(
    (state: State) => state.customerApp.profile?.data as Company,
  );
  const appUser = useSelector((state: State) => state.appUser);

  type ProfileFormValues = {
    name: string;
    ruc: number | null;
    phoneNumber: string | null;
    description: string | null;
    industry: string | null;
    address: string | null;
    reference: string | null;
    email: string | null;
    owner_name: string | null;
    district: string | null;
    password: string;
  };

  const { register, setValue } = useForm<ProfileFormValues>();

  useEffect(() => {
    if (customerData) {
      setValue('name', customerData.name ?? '--');
      setValue('ruc', customerData.ruc ?? null);
      setValue('phoneNumber', customerData.phoneNumber ?? null);
      setValue('description', customerData.description ?? null);
      setValue('industry', customerData.industry ?? null);
      setValue('address', customerData?.address ?? null);
      setValue('reference', customerData?.reference ?? null);
      setValue('email', customerData.email ?? null);
      setValue('owner_name', customerData.owner_name ?? null);
      setValue('district', customerData?.district ?? null);
    }
  }, [customerData, setValue]);

  const dispatch = useDispatch();

  const handleFetchProfile = useCallback(async () => {
    await fetchCompanyProfile(appUser.uid)(dispatch);
  }, [appUser.uid, dispatch]);

  useEffect(() => {
    handleFetchProfile();
  }, [appUser.uid, handleFetchProfile]);
  return (
    <div className="m-auto max-w-screen-xl">
      <form className="flex-1">
        <div>
          <section className="rounded-lg bg-white p-5 shadow-lg">
            <div className="mb-5 flex justify-between">
              <h2 className="text-xl text-greenQ">Datos De La Empresa</h2>
              <button disabled className="btn-green flex p-2 !text-white">
                Editar
                <FaPencil className="ml-2" />
              </button>
            </div>
            <div className="flex justify-between gap-28">
              <div className="basis-[15rem] px-5">
                <Image
                  className="m-auto mb-4"
                  alt="User profile"
                  width={500}
                  height={500}
                  src={appUser.photoURL ? appUser.photoURL : '/images/defaultAvatar.png'}
                />
              </div>
              <div className="flex-1">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Nombre de Comercio
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
                      Nombre de Responsable
                    </label>
                    <input
                      type="text"
                      id="owner_name"
                      {...register('owner_name', {
                        value: customerData?.owner_name ?? '--',
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
                      R.U.C.
                    </label>
                    <input
                      type="number"
                      id="ruc"
                      {...register('ruc', {
                        value: customerData?.ruc,
                      })}
                      disabled
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                  </div>
                </div>
                <div className="mb-4 flex gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Número de celular
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      {...register('phoneNumber', {
                        value: customerData?.phoneNumber ?? '--',
                      })}
                      disabled
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-1 flex-col rounded-lg bg-white p-5 shadow-lg">
            <div className="mb-5 flex justify-between">
              <h2 className="text-xl text-greenQ">Autenticación</h2>
            </div>
            <div className="flex h-full flex-col justify-between gap-4">
              <div className="mx-auto w-full">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Correo Electrónico
                  </label>
                  <p>{customerData?.email}</p>
                </div>
                <div className="mx-auto mt-5 w-fit">
                  <EmailVerified isVerified={auth.currentUser?.emailVerified ?? false} />
                </div>
                <div className="mx-auto mt-6 w-fit">
                  {customerData?.email && (
                    <ChangePassword userEmail={customerData?.email} />
                  )}
                </div>
              </div>
              <p className="text-[12px] text-gray-500">
                Mantenga su cuenta segura utilizando una contraseña segura y verificando
                su correo electrónico.
              </p>
            </div>
          </section>
        </div>

        <section className="mb-5 mt-5 rounded-lg bg-white p-5 shadow-lg">
          <div className="mb-5 flex justify-between">
            <h2 className="text-xl text-greenQ">Datos De Recojo</h2>
            <div className="flex items-center gap-4">
              <button disabled className="btn-green flex p-2 !text-white">
                Editar
                <FaPencil className="ml-2" />
              </button>
              <Tooltip text={EDITING_ADDRESS_INFO} tooltipClassName="!w-28 text-center">
                <FaInfoCircle className="cursor-pointer text-greenQ" size={25} />
              </Tooltip>
            </div>
          </div>
          <div className="mb-4 flex gap-4">
            <div className="flex-1">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                Dirección
              </label>
              <input
                type="text"
                id="address"
                {...register('address', {
                  value: customerData?.address ?? '--',
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
                  value: customerData?.district ?? '--',
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
              id="reference"
              {...register('reference', {
                value: customerData?.reference ?? '--',
              })}
              disabled
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
        </section>
      </form>
    </div>
  );
};

export default Profile;
