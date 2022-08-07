const initDraggable = () => {
  dragElement(document.getElementById("manual"))

  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
    const element = document.getElementById("draggable")

    if (element) {
      element.onmousedown = dragMouseDown;}
    else {elmnt.onmousedown = dragMouseDown;}

    function dragMouseDown(w) {
      w = w || window.event;
      w.preventDefault();
      pos3 = w.clientX;
      pos4 = w.clientY;
      window.onmouseup = closeDragElement;
      window.onmousemove = elementDrag;}

    function elementDrag(w) {
      w = w || window.event;
      w.preventDefault();
      pos1 = pos3 - w.clientX;
      pos2 = pos4 - w.clientY;
      pos3 = w.clientX;
      pos4 = w.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";}

    function closeDragElement() {
      window.onmouseup = null
      window.onmousemove = null
    }
  }
}

function initToggleManual() {
  const closeBtn = document.getElementById("close-btn")
  const openBtn = document.getElementById("info-btn")
  closeBtn.onclick = () => {
    document.getElementById("manual").style.display = "none"
    document.getElementById("info-btn").style.display = "block"
  }
  openBtn.onclick = () => {
    document.getElementById("manual").style.display = "block"
    document.getElementById("info-btn").style.display = "none"
  }
}


window.onload = function(){
  const pageIdsArray = ["320255113","320255114","320255117","320255119","320255121","320255122","320255124","320255125","320255129","320255131","320255132","320255133","320255134","320255135","320255136","320255137","320255138","320255139","320255140","320255141","320255142","320255147","320255148","320255149","320255150","320255152","320255153","320255154","320255155","320255156","320255158","320255159","320255160","320255161","320255162","320255170","320255172","320255173","320255174","320255175","320255177","320255179","320255181","320255184","320255185","320255186","320255187","320255188","320255189","320255190","320255191","320255192","320255193","3202560741","320259067","320259101","320259129","320259130","320259131","320259132","320259133","320259134","320259135","320259137","320259138","320259139","320259140","320265921","320265922","320265926","320265981","320266588"]

  const hash = window.location.hash
  const pageId = hash.split('/')[2]
  const page = pageId && pageIdsArray.includes(pageId) ? pageId : 'home'

  document.getElementById("manual-text").setAttribute("src", `./assets/manual/${page}.html`);

  initDraggable()
  initToggleManual()

  // change embed source
  window.addEventListener('popstate', function() {
    const hash = window.location.hash
    const pageId = hash.split('/')[2]
    const page = pageId && pageIdsArray.includes(pageId) ? pageId : 'index'
    console.log(pageId, pageIdsArray.includes(pageId))
    document.getElementById("manual-text").setAttribute("src", `./assets/manual/${page}.html`);
  });
}

