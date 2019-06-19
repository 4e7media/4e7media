---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: 4e7 Media
---
<div id="home">
  {% include landingpage.html %}
  {% include campaingns-eye.html %}
  {% include features.html %}
  {% include casesindex.html %}
  {% include work.html %}
  {% include plattforms.html %}
  {% include aboutus.html %}
  <div id="press">
    <img class="desktop press-title" src="../img/press-title.svg">
    <img class="mobile press-title" src="https://res.cloudinary.com/media4e7/image/upload/v1560353453/press_eqjnrc.svg">
    <div id="press-gal">
    {% for img in site.data.press.url %}
      <a href="{{site.cloud_host}}{{img}}">
        <img class="press-img" src="{{site.cloud_host}}if_w_gt_h,c_fill,h_180,w_250/if_h_gt_w,c_fill,w_120,h_180/if_h_eq_w,c_fill,w_120,h_180{{img}}">
      </a>
    {% endfor %}
    </div>
    <button type="button" class="press-more">More</button>
    <button type="button" class="press-less">Close</button>
  </div>
</div>
<script>
        // applying photobox on a `gallery` element which has lots of thumbnails links.
        // Passing options object as well:
        //-----------------------------------------------
        $('#press-gal').photobox('a', {
            time: 0
        });
        // using a callback and a fancier selector
        //----------------------------------------------
        $('#press-gal').photobox('li > a.family', {
            time: 0
        }, callback);
        function callback() {
            console.log('image has been loaded');
        }
        // re-initialize the photbox DOM (does what Document ready does)
        //-----------------------------------------------
        $('#press-gal').photobox('prepareDOM');
  </script>