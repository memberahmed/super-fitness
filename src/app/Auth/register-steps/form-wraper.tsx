import { useTranslation } from "react-i18next";

type FormWrapperProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

export default function FormWrapper({ children, title, description }: FormWrapperProps) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      {/* Welcom massage */}
      <h2 className=" mb-10 flex flex-col items-center justify-center font-baloo font-normal text-2xl leading-[140%] tracking-none capitalize ">
        <span className="text-[48px] font-extrabold">{title}</span>
      </h2>
      {description && <p>{description}</p>}
      <div>{children}</div>
    </div>
  );
}
