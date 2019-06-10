---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: home
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
    <img class="press-title" src="../img/press.png">
    <div class="press-box">
    {% for img in site.data.press.url %}
      <img src="{{site.cloud_host}}h_180,c_fill/{{img}}">
    {% endfor %}
    </div>
    <button type="button" class="press-more">MORE PRESS</button>
    <button type="button" class="press-less">CLOSE</button>
  </div>
</div>