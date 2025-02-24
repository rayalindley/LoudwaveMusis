import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <div> 
          <a href="index.php">
            <img src="images/lwmlogo.png" className="indexlogo"/>
          </a>
          
          <a href="index.php">
            LoudWave Music
          </a>
        </div>

        <div>
          <a href="index.php" className="currnav"> Home </a>
          <a href="concerts.php"> Concerts </a>
          <a href="aboutus.php"> About Us </a>
          <a href="contactus.php"> Contact Us </a>
        </div>
          
        <div>
          {/* php */}
        </div>
      </header>

      <div>
        <h1 className="textbanner2"> Let the <span className="textbanner">Sound Waves</span> Take Over <br/> with <span className="textbanner">LoudWave Music </span></h1>
        <h6 id="bannersub"> Browse our selection, grab your friends, and let the sound waves take over. </h6>
      </div>

      <div className="parcontainer">
        <div className="botcontainer">
          <h1> FEATURED ARTISTS !</h1>

          <div id="artist-container">
            <div>
              <img src="images/artist_blackpink.jpg"/>
              <p className="artist-name"> BLACKPINK </p>
            </div>

            <div>
              <img src="images/artist_unis.jpg"/>
              <p className="artist-name"> UNIS </p>
            </div>

            <div>
              <img src="images/artist_aespa.png"/>
              <p className="artist-name"> AESPA </p>
            </div>

            <div>
              <img src="images/artist_bini.jpg"/>
              <p className="artist-name"> BINI </p>
            </div>
          </div>
                
          <h1> HOT TICKETS!</h1>

          <div id="concert-container">
            <div className="concert-content">
              <div>
                <a href="ticket.php?concertname=R to V"><img src="images/concert_rtov.png"/></a>
              </div>

              <div className="concert_maindeets">
                <h5> R to V </h5>
                <h6> SM Seaside Arena <br/> April 15, 2025 </h6>
              </div>

              <a href="ticket.php?concertname=R to V"> Buy Tickets </a>
            </div>

            <div className="concert-content">
              <div>
                <a href="ticket.php?concertname=Born Pink"><img src="images/concert_bornpink.png"/></a>
              </div>
              
              <div className="concert_maindeets">
                <h5> Born Pink </h5>
                <h6> SM Seaside Arena <br/>
                April 15, 2025 </h6>
              </div>

              <a href="ticket.php?concertname=Born Pink"> Buy Tickets </a>
            </div>
          
            <div className="concert-content">
              <div>
                <a href="ticket.php?concertname=Unis Verse"><img src="images/concert_unisverse.png"/></a>
              </div>
              
              <div className="concert_maindeets">
                <h5> Unis Verse </h5>
                <h6> SM Seaside Arena <br/>
                April 15, 2025 </h6>
              </div>

              <a href="ticket.php?concertname=Unis Verse"> Buy Tickets </a>
            </div>
              
            <div className="concert-content">
              <div>
                <a href="ticket.php?concertname=SYNK: Parallel Line"><img src="images/concert_synk.png"/></a>
              </div>
              
              <div className="concert_maindeets">
                <h5> SYNK: Parallel Line </h5>
                <h6> SM Seaside Arena <br/>
                April 15, 2025 </h6>
              </div>
              
              <a href="ticket.php?concertname=SYNK: Parallel Line"> Buy Tickets </a>
            </div>
              
            <div className="concert-content">
              <div>
                <a href="ticket.php?concertname=BINIverse: The First Solo Concert"><img src="images/concert_biniverse.png"/></a>
              </div>
              
              <div className="concert_maindeets">
                <h5> BINIverse </h5>
                <h6> SM Seaside Arena <br/>
                April 15, 2025 </h6>
              </div>

              <a href="ticket.php?concertname=BINIverse: The First Solo Concert"> Buy Tickets </a>
            </div>
          </div>
        </div>
          
        <div className="topcontainer">
            <input type="text" placeholder="Search for concerts and artists to find your next favorite music experience" className="search-bar"/>
        </div>
      </div>
    </div>
        
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
