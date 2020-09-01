const Mover = function(id) {
  this.element = document.getElementById(id);
  this.go = function({className, property, value, delay, transition}) {
    let child = this.element.getElementsByClassName(className);

    setTimeout(() => {
      for(let i = 0; i < child.length; i++) {
        if(transition) child[i].style.transition = 'all '+transition;
        child[i].style[property] = value;
      }
    }, (delay < 1) ? 1 : delay);
  }
}