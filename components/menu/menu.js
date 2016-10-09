(function() {
	'use strict';

	/**
	 * @class Menu
	 * Компонента "Меню"
	 */
	class Menu {

		/**
		 * @constructor
		 * @param  {Object} opts
		 */
		constructor ({el, data, onPick}) { // деструктуризация объекта
			this.el = el;
			this.data = data;
			this.onPick = onPick;

			this.render();

			this._initEvents();
		}

		/**
		 * Добавляем элемент меню
		 * @param {Object} item
		 */
		addItem (item) {
			this.data.items.push(item);
			this.render();
		}

		/**
		 * Удаляем пункт меню из данных
		 * @param  {Object} removedItem
		 */
		removeItem (removedItem) {
			this.data.items = this.data.items.filter((item, index) => {
				return index !== removedItem.index;
			});
			this.render();
		}

        /**
		 * Получаем последний пункт меню
         * @returns {*}
         */
		_getLastItem() {
			if (this.data.items.length > 0) {
                return this.data.items[this.data.items.length -1];
            }
            return null;
		}

        /**
         * Удаляем последний пункт меню из данных
         * @param  {Object} removedItem
         */
       removeLastItem () {
       	    let removedItem = this._getLastItem();
       		if (removedItem != 'undefined') {
       			this.removeItem(removedItem);
			}
        }

		/**
		 * Создаем HTML
		 */
		render () {
			this.el.innerHTML = `
				<div class="menu pure-menu custom-restricted-width">
					<span class="menu__title pure-menu-heading">
						${this.data.title}
					</span>
					<ul class="menu__list pure-menu-list">
						${generateItems(this.data.items)}
					</ul>
				</div>
			`;

			function generateItems (items) {
				/*	return items.map( (item, index) => {
					return `
						<li class="pure-menu-item" data-index="${index}">
							<a class="pure-menu-link" href="${item.title}" data-action="pick">
								${item.comment}
							</a>
							<i class="close" data-action="remove"></i>	
						</li>`;
				}).join('');*/

				console.log( items.length );

				return items.map( (item, index) => {
					return `
						<li class="pure-menu-item" data-index="${index}">
							<a class="pure-menu-link">${item.title}: ${item.comment}</a>
							<i class="close" data-action="remove"></i>
						</li> 
					`;
				}).join('');
			}
		}

		/**
		* Удаление элементов меню
		* @param  {HTMLElement} item
		* @private
		*/
		_onremove(item) {
			let index = parseInt(item.parentNode.dataset.index, 10);

			this.removeItem({
				index
			});
		}


		/**
		* Выбор элемента меню
		* @param  {HTMLElement} item
		*/
		_onpick(item) {
			this.onPick(item);
		}

		/**
		* Развешиваем события
		*/
		_initEvents() {
			this.el.addEventListener('click', this._onClick.bind(this));
			this.el.addEventListener('close', this._onClose.bind(this));
		}

		/**
		* Клик в любую область меню
		* @param {Event} event
		* @private
		*/
		_onClick(event) {
			event.preventDefault();
			let item = event.target;

			try {
				this['_on' + item.dataset.action](item);
			} catch (e) {
				throw new Error(`Метод ${item.dataset.action} не определен!`);
			}

		}

		_onClose(event) {
            console.log('Close_2');
            event.preventDefault();
            this.removeLastItem();
		}

	}

	// Export
	window.Menu = Menu;

})(window);