export default function Intro({ handleIntroEnd }: any) {
  function endIntro() {
    const intro: any = document.querySelector("#intro");
    if (intro) {
      intro.classList.add("animate-disappear");
      intro.onanimationend = () => handleIntroEnd();
    }
  }

  return (
    <div
      className="absolute flex h-full w-full items-center justify-center gap-20 portrait:flex-col portrait:gap-10"
      id="intro"
    >
      <div className="w-fit overflow-hidden">
        <div className="animate-slide-up" onAnimationEnd={endIntro}>
          <div className="text-8xl font-extrabold lg:text-9xl">MIZU</div>
          <div className="flex justify-between px-1.5 text-2xl lg:px-2 lg:text-3xl">
            <span>S</span>
            <span>T</span>
            <span>O</span>
            <span>R</span>
            <span>E</span>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-0 flex h-12 items-center">
        <small>&copy; 2024 WZF</small>
      </footer>
    </div>
  );
}
