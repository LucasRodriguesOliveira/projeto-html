const caption = document.getElementById('caption');
const radio = document.getElementsByName('slide');

const onElementAvailable = (selector, callback) => {
  const observer = new MutationObserver(mutations => {
    if (document.querySelector(selector)) {
      observer.disconnect();
      callback();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

onElementAvailable("#caption", () => {
  caption.textContent = captions.slide1;
});


const captions = {
  slide1: 'Water drops',
  slide2: 'water on rocks',
  slide3: 'People on bench',
  slide4: 'Mud \'n water',
};

const update = ({ target }) => {
  caption.textContent = captions[target.id];
}

Array.from(radio.values()).forEach((el) => {
  el.onchange = update;
})
