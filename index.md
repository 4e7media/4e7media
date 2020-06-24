---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: 4e7 Media Werbeagentur
---
<div class="gallery"></div>
<div id="home">
  {% include landingpage.html %}
  {% include campaingns-eye.html %}
  {% include features.html %}
  {% include casesindex.html %}
  {% include work.html %}
  {% include plattforms.html %}
  {% include aboutus.html %}
  <div id="press" class="section">
    <div class="fp-bg">
    <div class="flex-full-center">
    <div class="title-box f-t">
        <div class="sec-title m-r">
            <h1>PRESS</h1>
            <div class="line big"></div>
        </div>
    </div>
      <div id="press-gallery" style="display:none;">
        {% for img in site.data.press.url %}
          <img alt="press"
            src="{{site.cloud_host}}{{img}}" 
            data-image="{{site.cloud_host}}{{img}}"
				    data-description="{{site.cloud_host}}{{img}}">
        {% endfor %}
      </div></div>
    </div>
  </div>
  {% include telescope.html %}
  {% include footer.html %}
</div>
