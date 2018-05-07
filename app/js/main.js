(function ($, w, d) {

    let startNumProd = 0,
        bottomOffset = 300;
    const list = [];
    $.getJSON("app/data.json", function (data) {

        for (key in data.article) {
            const article = data.article[key];
            list.push(article);
        }
        showProducts(list, startNumProd, startNumProd + 6);

        startNumProd = startNumProd + 6;

    });

    function showProducts(array, begin, end) {
        for (let i = begin; i < end; i++) {
            const newsItem = $('<article/>', {
                class: 'news-item col-md-4'
            });
            /**
             *
             */
            const title = $('<h3/>', {
                text: array[i].title,
                class: 'overflow-title'
            });


            /**
             *
             */
            const image = $('<img/>', {
                text: array[i].title,
                class: 'img-responsive',
                src: array[i].img
            });
            /**
             *
             */
            const excerpt = $('<p/>', {
                text: array[i].excerpt
            });

            /**
             *
             */
            const date = $('<time/>', {
                text: array[i].date,
                class: 'news-data'
            });

            /**
             *
             */
                //
            const hr = $('<hr/>');

            newsItem.append(image).append(date).append(title).append(hr).append(excerpt);
            $('#newsWrapper').append(newsItem);
        }

    }


    $(w).scroll(function () {
        if ($(d).height() - $(w).height() - bottomOffset <= $(w).scrollTop()) {
            if (startNumProd < list.length) {
                if (startNumProd + 3 < list.length) {
                    showProducts(list, startNumProd, startNumProd + 3);
                    startNumProd = startNumProd + 3;
                    $('.loader').show();
                }
                else {
                    'NO NEWS';
                }
            }
        }
    });


    $("#mainNavigation ul li a").click(function (e) {
        e.preventDefault();
        $("#mainNavigation ul li a").removeClass('active');
        $(this).addClass('active');
    });


    $('#newsletterForm').click('submit', function (event) {
        console.log('asdasd');
        if (validateForm()) { // если есть ошибки возвращает true
            event.preventDefault();
        }
    });

    function validateForm() {
        $(".text-error").remove();

        const newsletterName = $("#newsletterName");
        if (newsletterName.val().trim().length < 4) {
            var newsletterNameLogin = true;
            newsletterName.after('<span class="text-error">This field is required</span>');
        }
        $("#newsletterName").addClass('error', newsletterNameLogin);


        const reg = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
        const newsletterEmail = $("#newsletterEmail");
        let newsletterEmailT = newsletterEmail.val().trim() ? false : true;

        if (newsletterEmailT) {
            newsletterEmail.after('<span class="text-error">A valid email address is required</span>');
        } else if (!reg.test(newsletterEmail.val())) {
            newsletterEmailT = true;
            newsletterEmail.after('<span class="text-error">Invalid e-mail</span>');
        }

        return ( newsletterNameLogin || newsletterEmailT );
    }

})(jQuery, window, document);