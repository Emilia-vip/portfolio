import arrows from "../assets/arrows.port.webp"


function Github() {
  return (
 
    <div>
         <img src={arrows} alt="pil nedåt" className="w-7 h-auto absolute top-22 right-26 z-60"/>
    
    <div
      className="
        absolute top-full right-0 mt-3
        w-56
        bg-white/80 backdrop-blur-xl
        border border-[rgba(200,180,150,0.4)]
        rounded-2xl
        shadow-[0_20px_50px_rgba(120,100,70,0.25)]
        p-4
        text-sm
      "
    >
      <p className="mb-3 text-[#5f584f]">
        Do you want to se more?
        <br />
        Klick bellow
      </p>
      <br/>
   
      

      <a
        href="https://github.com/Emilia-vip"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block w-full text-center
          px-4 py-2 rounded-xl
          bg-[#9c8b6a] text-white
          hover:opacity-90
          transition
        "
      >
        My Github!
      </a>
    </div>
    </div>
  )
}

export default Github
