document.oncontextmenu = function() {
    return false;
}

jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');

        // Show/Hide Tabs
        //jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
        jQuery('.tabs ' + currentAttrValue).slideDown(1200).siblings().slideUp(600);

        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });
});

