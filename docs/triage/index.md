---
hide:
  - navigation
  - toc
template: home.html
---

<div id="mainA">
  <div id="img_wrapper">
    <img src="../assets/bg.png" alt="bg" id="bg" class="imgBg">
    <a href="#pink" onclick=" document.getElementById('page_content').innerHTML = ' <object type=\'text/html\' data=\'pages/pink.html\' ></object>' " ><img src="../assets/pink.png" alt="pink" id="pink" class="imgBg"></a>
    <a href="#orange" onclick="document.getElementById('page_content').innerHTML = 'orange'"><img src="../assets/orange.png" alt="orange" id="orange" class="imgBg"></a>
    <a href="#yellow" onclick="document.getElementById('page_content').innerHTML = 'yellow'"><img src="../assets/yellow.png" alt="yellow" id="yellow" class="imgBg"></a>
    <a href="#arrow_l" onclick="document.getElementById('page_content').innerHTML = 'arrow_l'"><img src="../assets/arrow_l.png" alt="arrow_l" id="arrow_l" class="imgBg"></a>
    <a href="#arrow_r" onclick="document.getElementById('page_content').innerHTML = 'arrow_r'"><img src="../assets/arrow_r.png" alt="arrow_r" id="arrow_r" class="imgBg"></a>
  </div>

  <div id="page_content"></div>
</div>