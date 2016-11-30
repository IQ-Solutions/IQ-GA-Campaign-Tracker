/**
 * JavaScript file to track external Drupal site links into a Google Analytics campaign.
 * Created by Cheryl Shimer 11/2016
 *
 */

// Remove Drupal behaviors reference if not a Drupal site and start with line 15.
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
    Drupal.behaviors.my_custom_behavior = {
        attach: function (context, settings) {

            $(document).ready(function () {

                var domainName = 'http://' + document.location.hostname; //https:// for production if https is used

                var source = 'dynamic';
                var medium = 'Your_Medium'; // Replace with the name of the medium that you are tracking, i.e., Video.
                var campaign = 'Your_Campaign'; // Replace with the name of your campaign.

                $('a').live('click', function (e) {
                    var link = $(this)[0].href;

                    if(source == 'dynamic') {
                        source = document.location; // Source can be page URL, title, etc.
                    }

                    // Your external link to be tracked.  Use the or operator '||' to separate multiple links.
                    if (link === 'https://xxx.xxxx') {

                        ga('create', 'UA-XXXXXXXX-1', {'name': 'campaignTracker'}); // Replaced X's with Google Analytics account ID
                        ga('set', {
                            'campaignSource': source,
                            'campaignMedium': medium,
                            'campaignName': campaign
                        });
                    }
                });
            });
        }
    }

})(jQuery, Drupal, this, this.document); // Comment out this line if not Drupal and uncomment line 46.
//})(jQuery);