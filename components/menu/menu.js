(function () {
	'use strict';

	class Menu {
		constructor (options) {
			this.el = options.el;

			this._items = this.el.querySelectorAll('.menu__item');
			this._initEvents();
		}


		_initEvents () {
			this.el.addEventListener('click', this._onClick.bind(this));
		}


		_onClick (event) {
			event.preventDefault();
			let target = event.target;

			if (target.classList.contains('menu__title')) {
				this.toggle();
			}

			if (target.classList.contains('menu__item')) {
				this.toggleItem(target);
			}
		}


		toggle () {
			this.el.classList.toggle('menu_open');
		}


		toggleItem (item) {
			item.classList.toggle('menu__item_select');
		}

		getData () {
			return Array.prototype.filter.call(this._items, item => {
				return item.classList.contains('menu__item_select');
			}).map(item => item.innerHTML);
		}

	}

	// export
	window.Menu = Menu;

})();