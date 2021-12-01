//Используем метод замыкание, теперь нам доступны приватные переменные.
// return {
//   open() {},
//   close() {},
//   destroy() {},
// };

function _createModal(options) {
  //нижнее подчеркывание -  _createModal - означет приватная ф-ция.
  const modal = document.createElement("div"); // modal - корневой елемент
  modal.classList.add("vmodal"); // vmodal - корневой клас
  modal.insertAdjacentHTML(
    //afterbegin - первым параметром указываем на позицию куда нам поместить HTML
    //Вторым параметром вставляем наш HTML в `` - для того, что бы форматирование сохранялось.
    "afterbegin",
    `<div class="modal-overlay">
        <div class="modal-window">
          <div class="modal-header">
            <span class="modal-title">Modal title</span>
            <span class="modal-close">&times;</span>
          </div>
          <div class="modal-body">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div class="modal-footer">
            <button>OK</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>`
  );
  //Вызываем дом елемент, для отображения модального окна. document.body.appendChild(modal);
  document.body.appendChild(modal);
  return modal;
}

$.modal = function (options) {
  const ANIMATION_PEED = 200;
  //Вызываеи ф-цию modal, для этого создаем приватную переменную.
  //Создаем приватную переменную $modal - это будет обозначение, что это как бы Dom node element
  const $modal = _createModal(options);
  let closing = false;
  return {
    open() {
      !closing && $modal.classList.add("open");
    },
    close() {
      close = true;
      $modal.classList.remove("open");
      $modal.classList.add("hide");
      setTimeout(() => {
        $modal.classList.remove("hide");
        closing = false;
      }, ANIMATION_PEED);
    },
    destroy() {}, //помогает, что преложение не работало медленно, чтобы было много модалок итд. Для плагина метод очень важен.
  };
};
