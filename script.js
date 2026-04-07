<script>
document.addEventListener("DOMContentLoaded", function () {

  const texts = [
    "Negocios Modernos",
    "E-commerce que Venden",
    "Empresas en Crecimiento"
  ];

  let textIndex = 0;
  let charIndex = 0;
  const speed = 50;

  const textElement = document.getElementById("changing-text");

  function type() {
    if (charIndex < texts[textIndex].length) {
      textElement.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, speed);
    } else {
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (charIndex > 0) {
      textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, speed / 2);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, 300);
    }
  }

  type();
});
</script>