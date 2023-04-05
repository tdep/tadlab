import '../../../src/styling/aboutmenu.css'

export const About = () => {
  const closeAbout = () => {
    document.getElementById("about").style.width = "0";
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show')
        }
      }
    }
  }
  
  return (
    <div id="about" className="menu-card">
      <a href="javascript:void(0)" className="closeBtn" onClick={closeAbout}>&times;</a>
      <h1>ABOUT</h1>
      <div id="about-container" className="menu-card-container">
        <div id="details-container">
          <div id="tad">
            <div id="tad-img">
              <img src="../src/assets/avatar6.png" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quam elit,
              rutrum quis dolor vel, porttitor dignissim nisl. Mauris quis pellentesque justo,
              ac mattis purus. Maecenas finibus velit malesuada, lobortis elit eget, hendrerit enim.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque lectus
              quis mauris pulvinar, sodales consequat mauris elementum. Cras non sapien felis.
              In vitae tortor sit amet orci venenatis porta ac laoreet nulla. Phasellus hendrerit
              nunc ut auctor pellentesque. Proin sit amet sem porttitor, semper quam nec, tincidunt
              ante. Praesent odio felis, varius a diam sed, lacinia egestas ipsum.</p>
          </div>
        </div>
        <div id="links-container">
          <a href="#">Synths</a>
          <a href="#">Tone.js</a>
        </div>
      </div>
    </div>
  )
}