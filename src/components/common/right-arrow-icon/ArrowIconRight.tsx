import ArrowIcon from "@/assets/images/Arrow-top-right.svg";

export default function ArrowIconRight() {
  return (
    <img
      src={ArrowIcon}
      alt="arrow-icon"
      className="bg-flame border-2 border-white p-2 rounded-full absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 hidden md:block"
    />
  );
}
