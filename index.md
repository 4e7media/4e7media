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
    <div class="press-box">
    {% for img in site.data.press.url %}
      <img src="{{site.cloud_host}}h_180,c_fill/{{img}}">
    {% endfor %}
    </div>
    <button type="button" class="press-more">More</button>
    <button type="button" class="press-less">Close</button>
  </div>
</div>