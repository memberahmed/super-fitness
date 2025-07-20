import { useTranslation } from "react-i18next";

type FormWrapperProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

export default function FormWrapper({ children, title, description }: FormWrapperProps) {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full p-4">
        {/* Welcom massage */}
        <h2 className=" text-center font-baloo font-extrabold text-3xl md:text-[48px]  leading-[140%] tracking-none capitalize ">
          {title}
        </h2>
        {description && (
          <p className="font-normal text-base md:text-xl  tracking-none leading-140 capitalize">
            {description}
          </p>
        )}
      </div>
      <div className="flex items-center justify-center">{children}</div>
    </>
  );
}
