(function () {
	'use strict';

	class Menu {
		constructor (options) {
			this.el = options.el;
			this.data = options.data;

			this.render();

			this._items = this.el.querySelectorAll('.menu__item');
			this._initEvents();
		}

		render () {
			this.el.innerHTML = '';

			let title = document.createElement('div');
			title.classList.add('menu__title');
			title.innerHTML = this.data.title;

			let list = document.createElement('ul');
			list.classList.add('menu__list');

			this.data.items.forEach(itemData => {
				let item = document.createElement('li');
				item.classList.add('menu__item');
				item.innerHTML = itemData.anchor;

				list.appendChild(item);
			});

			this.el.appendChild(title);
			this.el.appendChild(list);
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