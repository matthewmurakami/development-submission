document.addEventListener("DOMContentLoaded", function() {
    const mockup = document.querySelector('.mockup');
    let isHovering = false;
  
    mockup.addEventListener('mouseenter', function(e) {
      isHovering = true;
      //rotateImage(e);
    });
  
    mockup.addEventListener('mousemove', function(e) {
      if (isHovering) {
        //rotateImage(e);
      }
    });
  
    mockup.addEventListener('mouseleave', function() {
      isHovering = false;
      mockup.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  
    function rotateImage(e) {
      const rect = mockup.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
  
      const angleX = (e.clientY - centerY) / 20;
      const angleY = (e.clientX - centerX) / 20;
  
      mockup.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    }
  });
  