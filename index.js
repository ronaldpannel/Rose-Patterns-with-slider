/**@type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
const slider = document.getElementById("slider");

function drawRose() {
  let k = slider.value / 5;
  for (let a = 0; a < Math.PI * 2 * 5; a += 0.005) {
    let r = Math.cos(k * a) * 200;
    let x = r * Math.cos(a);
    let y = r * Math.sin(a);
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  drawRose();
  ctx.restore();
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  canvas.width = canvas.width;
  canvas.height = canvas.height;
});
