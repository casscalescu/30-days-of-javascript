const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // this.dataset is an object that contains all of the data attributes from that specific element
  const suffix = this.dataset.sizing || ''; // color has no suffix and will append undefined if you don't add || ''
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
