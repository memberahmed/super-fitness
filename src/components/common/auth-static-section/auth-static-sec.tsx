export default function AuthStaticSection() {
  return (
    <>
      <div className="min-h-screen  px-8 sm:border-r-2 sm:rtl:border-l-2 sm:border-orange-base/20 flex flex-col items-center justify-center ">
        {/* Logo photo */}
        <div className=" w-28 md:w-44  ">
          <img className="w-full h-full" src="\src\assets\images\logo-full.png" alt="logo photo" />
        </div>
        {/* Main photo */}
        <div className="w-72 sm:w-96 xl:w-[628px] ">
          <img
            className="w-full h-full"
            src="\src\assets\images\auth\auth.png"
            alt="Welcoming photo"
          />
        </div>
      </div>
    </>
  );
}
