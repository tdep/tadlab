export const NewProject = () => {
  const closeNew = () => {
    document.getElementById("new").style.width = "0";
  }
  return (
    <div id="new" className="menu-card">
      <a href="javascript:void(0)" className="closeBtn" onClick={closeNew}>&times;</a>
      <h1>NEW PROJECT</h1>
      <div id="new-container" className="menu-card-container">
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
      </div>
    </div>
  )
}