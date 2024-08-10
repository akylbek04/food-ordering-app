import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-lime-600">
          Savor the Essence of Tradition with Every Bite
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        {/* <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        /> */}
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the{" "}
            <strong className="hover:text-lime-500 cursor-pointer">
              Lagman.KG
            </strong>{" "}
            App for faster ordering and personalised recommendations
          </span>
          <img src={appDownloadImage} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
