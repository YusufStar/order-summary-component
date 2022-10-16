import image from "./illustration-hero.svg"
import musicicon from "./icon-music.svg"

function App() {
  return (
    <div className={`h-screen bg-no-repeat bg-pale-blue flex items-center justify-center`}>
      <div className="desk:w-[400px] desk:h-[650px] mobile:w-[300px] mobile:h-[550px] rounded-3xl bg-white flex flex-col items-center shadow-lg">
        <img src={image} className="w-[100%] rounded-t-3xl" alt="hero" />
        <h1 className="font-[900] desk:text-3xl mobile:2xl text-dark-blue mt-10">Order Summary</h1>
        <h1 className="text-center text-desaturated-blue font-[500] desk:text-[16px] mobile:text-[14px] mt-7">You can now listen to millions of songs,<br/>audiobooks, and podcasts on any device<br/>anywhere you like!</h1>
        <div className="w-[75%] h-[90px] bg-very-pale-blue flex flex-row items-center justify-between rounded-xl mt-5">
          <img src={musicicon} alt="music" className="ml-5 desk:w-[48px] mobile:w-[32px]" />
          <div className="h-[50%] w-[50%] flex flex-col items-start desk:ml-0 mobile:ml-2 justify-center">
            <h1 className="text-dark-blue font-[900] desk:text-[16px] mobile:text-[12px]">Annual Plan</h1>
            <h1 className="text-desaturated-blue font-[900] desk:text-[16px] mobile:text-[12px]">$59.99/year</h1>
          </div>
          <a href="#" className="mr-5 font-[700] desk:text-[15px] mobile:text-[11px] underline text-bright-blue hover:no-underline hover:opacity-80 transition-all duration-200">Change</a>
        </div>
        <button className="w-[75%] h-[50px] rounded-xl bg-bright-blue shadow-xl mt-5 font-[700] text-[16px] text-white hover:opacity-80 transition-all duration-200">Proceed to Payment</button>
        <h1 className="text-[15px] text-desaturated-blue mt-5 font-[900] hover:text-dark-blue cursor-pointer transition-all duration-200">Cancel Order</h1>
      </div>
    </div>
  );
}

export default App;
