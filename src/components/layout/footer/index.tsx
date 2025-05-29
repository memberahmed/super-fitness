export default function Footer() {
  return (
    <footer className="grid grid-cols-4 gap-4 sm:justify-items-start justify-items-center  bg-green-400 ">
      <div className="col-span-4 sm:col-span-2 lg:col-span-1">
        {" "}
        <img src="/src/assets/images/logo.svg" alt="logo" />{" "}
      </div>
      <div className="col-span-4 sm:col-span-2 lg:col-span-1">
        {" "}
        <h3>Contact us</h3>{" "}
      </div>
      <div className="col-span-4 sm:col-span-2 lg:col-span-1">
        <h3>our gym timing</h3>
      </div>
      <div className="col-span-4 sm:col-span-2 lg:col-span-1">
        <h3>our location</h3>
      </div>
    </footer>
  );
}
