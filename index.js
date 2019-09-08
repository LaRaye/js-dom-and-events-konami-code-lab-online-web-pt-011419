const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let i = 0;

code.addEventListener ('keydown', function init(e) {
  const key = parseInt(e.detail || e.which);

  if (key === code[i]) {
    i++;
    
    if (i === code.length) {
      alert("Whoo!");
      
      i = 0;
    } else {
      i = 0;
    }
  }
});