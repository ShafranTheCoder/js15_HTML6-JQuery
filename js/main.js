'use strict';

(function($) {
    $(function() {
        $('ul.tabs').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active');
                $('ul.tabs-content').find('li.tab-content').removeClass('is-open').eq($(this).index()).addClass('is-open');
        });

    });
})(jQuery);