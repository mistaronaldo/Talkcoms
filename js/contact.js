function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
}
loadScript('https://unpkg.com/alpinejs');

$(document).ready(function () {
    $('#get-started').submit(function (e) {
        e.preventDefault();
        $('.spinner').fadeIn();


        var name = $('#first-name').val();
        var phone_number = $('#phone_number').val();
        var email = $('#email').val();
        var service = $('.itemslist').text()
        var message = $('#message').val();
        var company = $('#company').val();
        var company_size = $('#company_size').val();
        var positionincompany = $('#positionincompany').val();
        var appointment_date = $('#block-date').val();
        var appointment_time = $('#block-time').val();


        var settings = {
            "url": "https://crm.talkcoms.co.uk/api/resource/Website%20Inquiry",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({
                name: name,
                phone_number: phone_number || null,
                email: email,
                service: service || null,
                message: message,
                company: company || null,
                company_size: company_size || null,
                positionincompany: positionincompany || null,
                appointment_date: appointment_date || null,
                appointment_time: appointment_time || null,
            })
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            $('#success').fadeIn(200);
        }).fail(function (error) {
            console.error(error);
            $('#failure').fadeIn(200);
        });
    });


    $('#contact-us').submit(function (e) {
        e.preventDefault();

        var name = $('#first-name').val();
        var phone_number = $('#phone-number').val();
        var email = $('#email').val();
        var service = $('.itemslist').text()
        var message = $('#message').val();
        var company = $('#company').val();
        var company_size = $('#company_size').val();
        var positionincompany = $('#positionincompany').val();
        var appointment_date = $('#block-date').val();
        var appointment_time = $('#block-time').val();


        var settings = {
            "url": "https://crm.talkcoms.co.uk/api/resource/Website%20Inquiry",
            "method": "POST",
            "timeout": 0,

            "data": JSON.stringify({
                name: name,
                phone_number: phone_number || null,
                email: email,
                service: service || null,
                message: message,
                company: company || null,
                company_size: company_size || null,
                positionincompany: positionincompany || null,
                appointment_date: appointment_date || null,
                appointment_time: appointment_time || null,
            })
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            $('#success').fadeIn(200);
        }).fail(function (error) {
            console.error(error);
            $('#failure').fadeIn(200);
        });

    });

    $('.close-modal').click(function (e) {
        e.preventDefault();
        $('.spinner').fadeOut();
        $('.modal').fadeOut(100);
    });
});



document.addEventListener("alpine:init", () => {
    Alpine.data("multiselect", () => ({
        style: {
            wrapper: "w-full relative",
            select:
                "border w-full border-gray-300 rounded-md py-2 px-2 text-md flex gap-2 items-center cursor-pointer bg-white h-16 font-light shadow-sm ",
            menuWrapper:
                "w-full rounded-lg py-1.5 text-sm mt-1 shadow-lg absolute bg-white z-10",
            menu: "max-h-52 overflow-y-auto",
            textList: "overflow-x-hidden text-ellipsis grow whitespace-nowrap itemslist",
            trigger: "px-2 py-2 rounded bg-neutral-100",
            badge: "py-1.5 px-3 rounded-full bg-neutral-100",
            search:
                "px-3 py-2 w-full border-0 border-b-2 border-neutral-100 pb-3 outline-0 mb-1",
            optionGroupTitle:
                "px-3 py-2 text-neutral-400 uppercase font-bold text-xs sticky top-0 bg-white",
            clearSearchBtn: "absolute p-3 right-0 top-1 text-neutral-600",
            label: "hover:bg-neutral-50 cursor-pointer flex py-2 px-3"
        },

        icons: {
            times:
                '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-4 h-4"><g xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M6 18L18 6M18 18L6 6"/></g></svg>',
            arrowDown:
                '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-4 h-4"><path xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-width="2" d="M5 10l7 7 7-7"/></svg>'
        },

        init() {
            const style = this.style;

            const originalSelect = this.$el;
            originalSelect.classList.add("hidden");

            const wrapper = document.createElement("div");
            wrapper.className = style.wrapper;
            wrapper.setAttribute("x-data", "newSelect");

            const newSelect = document.createElement("div");
            newSelect.className = style.select;
            newSelect.setAttribute("x-bind", "selectTrigger");
            // newSelect.classList.add('h-16 md:text-md font-light block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6')

            const textList = document.createElement("span");
            textList.className = style.textList;

            const triggerBtn = document.createElement("button");
            triggerBtn.className = style.trigger;
            triggerBtn.type = 'button';
            triggerBtn.innerHTML = this.icons.arrowDown;

            const countBadge = document.createElement("span");
            countBadge.className = style.badge;
            countBadge.setAttribute("x-bind", "countBadge");

            newSelect.append(textList);
            newSelect.append(countBadge);
            newSelect.append(triggerBtn);

            const menuWrapper = document.createElement("div");
            menuWrapper.className = style.menuWrapper;
            menuWrapper.setAttribute("x-bind", "selectMenu");

            const menu = document.createElement("div");
            menu.className = style.menu;

            const search = document.createElement("input");
            search.className = style.search;
            search.setAttribute("x-bind", "search");
            search.setAttribute("placeholder", "filter");

            const clearSearchBtn = document.createElement("button");
            clearSearchBtn.className = style.clearSearchBtn;
            clearSearchBtn.setAttribute("x-bind", "clearSearchBtn");
            clearSearchBtn.innerHTML = this.icons.times;

            // menuWrapper.append(search);
            menuWrapper.append(menu);
            menuWrapper.append(clearSearchBtn);

            originalSelect.parentNode.insertBefore(
                wrapper,
                originalSelect.nextSibling
            );

            const itemGroups = originalSelect.querySelectorAll("optgroup");

            if (itemGroups.length > 0) {
                itemGroups.forEach((itemGroup) => processItems(itemGroup));
            } else {
                processItems(originalSelect);
            }

            function processItems(parent) {
                const items = parent.querySelectorAll("option");
                const subMenu = document.createElement("ul");
                const groupName = parent.getAttribute("label") || null;

                if (groupName) {
                    const groupTitle = document.createElement("h5");
                    groupTitle.className = style.optionGroupTitle;
                    groupTitle.innerText = groupName;
                    groupTitle.setAttribute("x-bind", "groupTitle");
                    menu.appendChild(groupTitle);
                }

                items.forEach((item) => {
                    const li = document.createElement("li");
                    li.setAttribute("x-bind", "listItem");

                    const checkBox = document.createElement("input");
                    checkBox.classList.add("mr-3", "mt-1");
                    checkBox.type = "checkbox";
                    checkBox.value = item.value;
                    checkBox.id = originalSelect.name + "_" + item.value;

                    const label = document.createElement("label");
                    label.className = style.label;
                    label.setAttribute("for", checkBox.id);
                    label.innerText = item.innerText;

                    checkBox.setAttribute("x-bind", "checkBox");

                    if (item.hasAttribute("selected")) {
                        checkBox.checked = true;
                    }
                    label.prepend(checkBox);
                    li.append(label);
                    subMenu.appendChild(li);
                });
                menu.appendChild(subMenu);
            }

            wrapper.appendChild(newSelect);
            wrapper.appendChild(menuWrapper);

            Alpine.data("newSelect", () => ({
                open: false,
                showCountBadge: false,
                items: [],
                selectedItems: [],
                filterBy: "",
                init() {
                    this.regenerateTextItems();
                },

                regenerateTextItems() {
                    this.selectedItems = [];
                    this.items.forEach((item) => {
                        const checkbox = item.querySelector("input[type=checkbox]");
                        const text = item.querySelector("label").innerText;
                        if (checkbox.checked) {
                            this.selectedItems.push(text);
                        }
                    });

                    if (this.selectedItems.length > 1) {
                        this.showCountBadge = true;
                    } else {
                        this.showCountBadge = false;
                    }

                    if (this.selectedItems.length === 0) {
                        textList.innerHTML = '<span class="text-neutral-400">select</span>';
                    } else {
                        textList.innerText = this.selectedItems.join(", ");
                    }
                },

                selectTrigger: {
                    ["@click"]() {
                        this.open = !this.open;

                        if (this.open) {
                            this.$nextTick(() =>
                                this.$root.querySelector("input[x-bind=search]").focus()
                            );
                        }
                    }
                },
                selectMenu: {
                    ["x-show"]() {
                        return this.open;
                    },
                    ["x-transition"]() { },
                    ["@keydown.escape.window"]() {
                        this.open = false;
                    },
                    ["@click.away"]() {
                        this.open = false;
                    },
                    ["x-init"]() {
                        this.items = this.$el.querySelectorAll("li");
                        this.regenerateTextItems();
                    }
                },
                checkBox: {
                    ["@change"]() {
                        const checkBox = this.$el;

                        if (checkBox.checked) {
                            originalSelect
                                .querySelector("option[value='" + checkBox.value + "']")
                                .setAttribute("selected", true);
                        } else {
                            originalSelect
                                .querySelector("option[value='" + checkBox.value + "']")
                                .removeAttribute("selected");
                        }
                        this.regenerateTextItems();
                    }
                },
                countBadge: {
                    ["x-show"]() {
                        return this.showCountBadge;
                    },
                    ["x-text"]() {
                        return this.selectedItems.length;
                    }
                },
                search: {
                    ["@keydown.escape.stop"]() {
                        this.filterBy = "";
                        this.$el.blur();
                    },
                    ["@keyup"]() {
                        this.filterBy = this.$el.value;
                    },
                    ["x-model"]() {
                        return this.filterBy;
                    }
                },
                clearSearchBtn: {
                    ["@click"]() {
                        this.filterBy = "";
                    },
                    ["x-show"]() {
                        return this.filterBy.length > 0;
                    }
                },
                listItem: {
                    ["x-show"]() {
                        return (
                            this.filterBy === "" ||
                            this.$el.innerText
                                .toLowerCase()
                                .startsWith(this.filterBy.toLowerCase())
                        );
                    }
                },
                groupTitle: {
                    ["x-show"]() {
                        if (this.filterBy === "") return true;

                        let atLeastOneItemIsShown = false;

                        this.$el.nextElementSibling
                            .querySelectorAll("li")
                            .forEach((item) => {
                                console.log(this.filterBy);
                                if (
                                    item.innerText
                                        .toLowerCase()
                                        .startsWith(this.filterBy.toLowerCase())
                                )
                                    atLeastOneItemIsShown = true;
                            });
                        return atLeastOneItemIsShown;
                    }
                }
            }));
        }
    }));
});
