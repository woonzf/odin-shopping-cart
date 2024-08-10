import { useState } from "react";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  return (
    <div className="w-xl mx-auto flex h-screen items-center justify-center gap-20 portrait:flex-col">
      <div className="w-fit">
        <div className="text-8xl font-extrabold lg:text-9xl">MIZU</div>
        <div className="flex justify-between p-1 text-2xl lg:p-2 lg:text-3xl">
          <span>S</span>
          <span>T</span>
          <span>O</span>
          <span>R</span>
          <span>E</span>
        </div>
      </div>
      <div className="w-[200px] lg:w-[300px]">
        <form className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" required />
          </div>
          {isSignUp === true && (
            <div className="flex flex-col">
              <label htmlFor="password-confirm">Confirm Password</label>
              <input
                type="text"
                name="password-confirm"
                id="password-confirm"
                required
              />
            </div>
          )}
          <button className="mt-3 rounded-md border border-black uppercase leading-loose hover:bg-black hover:text-white">
            {isSignUp === false ? <>Sign in</> : <>Sign up</>}
          </button>
        </form>
        <div className="mt-5 text-center">
          {isSignUp === false ? (
            <>
              Don't have an account?&nbsp;
              <button className="underline" onClick={() => setIsSignUp(true)}>
                Sign up
              </button>
            </>
          ) : (
            <>
              Have an account?&nbsp;
              <button className="underline" onClick={() => setIsSignUp(false)}>
                Log in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
