// Made with Zdog

const TAU = Zdog.TAU;
const offWhite = '#FED';
const gold = '#EA0';
const garnet = '#C25';
const eggplant = '#636';

const illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  zoom: 20,
  dragRotate: false,
});

// ----- model ----- //

var head = new Zdog.Shape({
  addTo: illo,
  stroke: 12,
  color: gold,
});

var eye = new Zdog.Ellipse({
  addTo: head,
  diameter: 2,
  quarters: 2,
  translate: { x: -2, y: 0, z: 4.5 },
  rotate: { z: -TAU/4 },
  color: eggplant,
  stroke: 0.5,
  backface: false,
});
eye.copy({
  translate: { x: 2, y: 0, z: 4.5 },
});

var backeye = new Zdog.Ellipse({
    addTo: head,
    diameter: 2,
    quarters: 2,
    translate: { x: -2, y: 0, z: -4.5 },
    rotate: { z: -TAU/4 },
    color: eggplant,
    stroke: 0.5,
    backface: true,
  });
  backeye.copy({
    translate: { x: 2, y: 0, z: -4.5 },
  });
// smile
new Zdog.Ellipse({
  addTo: head,
  diameter: 3,
  quarters: 2,
  translate: { y: 1.5, z: 4.5 },
  rotate: { z: TAU/4 },
  closed: true,
  color: '#FED',
  stroke: 0.5,
  fill: true,
  backface: false,
});

// Add second smile on opposite side
new Zdog.Ellipse({
    addTo: head,
    diameter: 3,
    quarters: 2,
    translate: { y: 1.5, z: -4.5 },
    rotate: { z: TAU/4 },
    closed: true,
    color: '#FED',
    stroke: 0.5,
    fill: true,
    backface: true,
    });

function animate() {
  illo.rotate.y += 0.01;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();
