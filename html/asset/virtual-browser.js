document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('input[type="file"]').addEventListener('change', function (e) {
    var file = e.target.files[0],
      reader = new FileReader(),
      preview = document.querySelector('.virtual_browser');
    if (file.type.indexOf('image') < 0) {
      return false;
    }
    reader.onload = (function (file) {
      return function (e) {
        while (preview.firstChild) preview.removeChild(preview.firstChild);
        var img = document.createElement('img');
        img.setAttribute('src', e.target.result);
        img.setAttribute('title', file.name);
        preview.appendChild(img);
      };
    })(file);
    reader.readAsDataURL(file);
  });
});
document.getElementById('slideBtn').onclick = function () {
  var desc_area = document.querySelector('.desc_area'),
    slideBtn = document.querySelector('.slideBtn');
  slideBtn.classList.toggle('is-active');
  desc_area.classList.toggle('is-active');
  if (slideBtn.classList.contains('is-active')) {
    slideBtn.innerHTML = '<i class="fas fa-arrow-alt-circle-down"></i>'
  } else {
    slideBtn.innerHTML = '<i class="fas fa-arrow-alt-circle-up"></i>'
  }
}
document.getElementById('input').onchange = function () {
  var desc_area = document.querySelector('.desc_area'),
    slideBtn = document.querySelector('.slideBtn'),
    desc_text = document.querySelector('.desc_text');
  slideBtn.classList.toggle('is-active');
  desc_area.classList.add('is-active');
  desc_text.classList.add('is-active');
  if (slideBtn.classList.contains('is-active')) {
    slideBtn.innerHTML = '<i class="fas fa-arrow-alt-circle-down"></i>'
  } else {
    slideBtn.innerHTML = '<i class="fas fa-arrow-alt-circle-up"></i>'
  }
}
document.getElementById('relode').onclick = function () {
  window.location.reload(true);
}
document.getElementById('switcher').onclick = function () {
  var pc = document.getElementById('pc'),
    sp = document.getElementById('sp'),
    virtual_browser = document.querySelector('.virtual_browser');
  if (pc.checked == true) {
    virtual_browser.classList.remove('is-active');
  } else if (sp.checked == true) {
    virtual_browser.classList.add('is-active');
  }
};
