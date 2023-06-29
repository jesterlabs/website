// Made with Zdog

// create illo


const illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
    zoom: 8,
  });
  
  // circle
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 20,
    translate: { z: 10 },
    stroke: 5,
    color: '#636',
  });
  
  // square
  new Zdog.Rect({
    addTo: illo,
    width: 20,
    height: 20,
    translate: { z: -10 },
    stroke: 3,
    color: '#E62',
    fill: true,
  });

  
  
  function animate() {
    illo.rotate.y += 0.05;
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
  }
  
  animate();