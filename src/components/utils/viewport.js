const intersectionObservers = {};

const observers = {
  class: entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  },
  default: entries => {
    entries.forEach(entry => {
      const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
      entry.target.dispatchEvent(new CustomEvent(eventName));
    });
  },
};

function ensureIntersectionObserver(name) {
  if (intersectionObservers[name]) return;

  intersectionObservers[name] = new IntersectionObserver(observers[name]);
}

function viewport(element, name = 'default') {
  ensureIntersectionObserver(name);

  intersectionObservers[name].observe(element);

  return {
    destroy() {
      intersectionObservers[name].unobserve(element);
    },
  };
}

function viewClass(element) {
  element.classList.add('animate');
  viewport(element, 'class');
}

export { viewport, viewClass };
