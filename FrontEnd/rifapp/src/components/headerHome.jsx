import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export function headerHome() {
  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation(); // Obtener la ubicación actual

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <div className="bg-primary-400 border-primary-400 w-full h-full">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 md:px-8 md:py-5">
        <div className="flex items-center justify-between">
          <Typography
            as="a"
            href="#"
            className="flex px-2 pb-2 cursor-pointer font-bold xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl text-3xl">
            RIFAPP
            <img src="/trebol.png" alt="Logo" className="w-12 md:mt-1 sm:-mt-1 xs:-mt-1 xxs:-mt-1" />
          </Typography>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-1 text-xl">
              {location.pathname === "/AboutUs" ? (
                <>

                  <Link to="/">
                    <Button
                    variant="gradient"
                    size="sm"
                    className="hidden md:inline-block text hover:transform hover:translate-y-1 transition-transform duration-200"
                  >
                      <span>Inicio</span>
                    </Button>
                  </Link>

                <Link to="/">
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden md:inline-block text hover:transform hover:translate-y-1 transition-transform duration-200"
                  >
                    <span>Iniciar Sesion</span>
                  </Button>
                  </Link>

                </>
              ) : (
                <>

                  <Link to="/">
                    <Button
                    variant="text"
                    size="sm"
                    className="hidden md:inline-block text hover:transform hover:translate-y-1 transition-transform duration-200"
                  >
                      <span>Inicia Sesion</span>
                    </Button>
                  </Link>


                  <Link to="/AboutUs">
                    <Button
                      variant="gradient"
                      size="sm"
                      className="hidden md:inline-block text hover:transform hover:translate-y-1 transition-transform duration-200"
                    >
                      <span>About Us</span>
                    </Button>
                  </Link>
                </>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-20 w-12 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          <div className="-mt-2 mb-1 border-b text-white border-gray-300 md:hidden"></div>
          <div className="flex items-center gap-x-4 px-4 mt-2 text md:hidden">
            {location.pathname === "/AboutUs" ? (
              <>

                <Link to="/"  className="w-full rounded-md bg-primary-250 text-white font-bold transition duration-200 hover:bg-primary-200 hover:text-white border-2 border-transparent hover:border-primary-550">
                  <Button fullWidth variant="text" size="sm">
                    <span>Iniciar Sesion</span>
                  </Button>
                </Link> 
                
                <Link to="/"  className="w-full rounded-md bg-primary-250 text-white font-bold transition duration-200 hover:bg-primary-200 hover:text-white border-2 border-transparent hover:border-primary-550">
                  <Button fullWidth variant="gradient" size="sm">
                    <span>Inicio</span>
                  </Button>
                </Link>
              </>
            ) : (
              <>
              <Link to="/" className="w-full rounded-md bg-primary-250 text-white font-bold transition duration-200 hover:bg-primary-200 hover:text-white border-2 border-transparent hover:border-primary-550">
                <Button fullWidth variant="text" size="sm">
                  <span>Inicia Sesion</span>
                </Button>
               </Link> 

                <Link to="/AboutUs" className="w-full rounded-md bg-primary-250 text-white font-bold transition duration-200 hover:bg-primary-200 hover:text-white border-2 border-transparent hover:border-primary-550">
                  <Button fullWidth variant="gradient" size="sm">
                    <span>About Us</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default headerHome;