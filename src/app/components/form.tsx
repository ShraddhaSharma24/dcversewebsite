function Form() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-10 bg-black text-white mx-4 sm:mx-[10%] lg:mx-[20%] border-white border-2 mb-6 md:mb-8">
      {/* Left Section */}
      <div className="flex-1">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4 font-poppins md:mt-6 lg:mt-10">
          Take Your Brand to the Next Level
        </h1>
        <p className="mb-4 md:mb-6 max-w-md text-white font-poppins text-sm sm:text-base md:text-lg lg:text-xl">
          Join the future of digital marketing with AI-powered content creation and virtual influencers.
        </p>
      </div>

      {/* Right Section (Form) */}
      <div className="flex-1">
        <form className="flex flex-col gap-3 md:gap-4">
          {["Name", "Email", "Business Name", "Where did you hear about us"].map((placeholder, idx) => (
            <input
              key={idx}
              placeholder={placeholder}
              aria-label={placeholder}
              className="p-2 text-sm sm:text-base bg-black border border-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all hover:shadow-[4px_0_10px_0_rgba(0,255,255,0.3)]"
            />
          ))}
          <textarea
            placeholder="Purpose"
            aria-label="Purpose"
            rows={4}
            className="p-2 text-sm sm:text-base bg-black border border-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all hover:shadow-[4px_0_10px_0_rgba(0,255,255,0.3)]"
          ></textarea>

          <button
            type="submit"
            className="p-2 mt-3 md:mt-4 bg-cyan-500 text-black text-base md:text-lg font-semibold transform transition-all hover:bg-cyan-400 hover:shadow-cyan-500/50 hover:font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form;