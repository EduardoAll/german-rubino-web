import React, {useState, useEffect} from 'react';
import './Navbar.css';


const Navbar = ({ isScrolling }) => {

  const[clicked, setClicked] = useState(false)

  const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

  const handleClick = () => {
    //cuando está true lo pasa a false y vice-versa.
    setClicked(!clicked)
  }

  const toTheTop = () => {
    window.scrollTo({ top:0, left:0, behavior:'smooth'})
  }

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  return(
    <nav className={`navbar ${isScrolling > 20 ? 'scrolling' : null}`}>
      <div className='navbar-logo' onClick={toTheTop}>
        <h3>Germán Rubino</h3>
      </div>
      <div className='navbar-sections'>
        <a onClick={handleClick} translate="no" href='/'>Home</a>
        <a onClick={handleClick} translate="no" href='/tour'>Tour</a>
        <a onClick={handleClick} translate="no" href='/bio'>Bio</a>
        <a onClick={handleClick} translate="no" href='/discografia'>Discografía</a>
        <a onClick={handleClick} translate="no" href='/contacto'>Contacto</a>
        {
          isReadyForInstall && <button onClick={downloadApp}>GR</button>
        }
      </div>
    </nav>
  );
}


export default Navbar;
