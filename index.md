---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: home
---
<div id="home">
  <div id="landingpage">
    <video loop muted autoplay class="fullscreen-bg__video">
      <source src="https://res.cloudinary.com/media4e7/video/upload/ac_none,vc_h264:main/v1559939589/video-header2_canbff.mp4">
    </video>
    <img class="logo" src="../img/icons/logo-4e7-media.png" title="The logo of 4e7media GmbH.">
  </div>
  <div id="campaigns">
    <img src="../img/camp/camp.png">
  </div>
  <div id="eye" style="background-image: url('../img/eye/eye-text.png');"></div>
  <div id="features">
  <div class="feat_cont">
    <div style="background-image: url('../img/wwdo/thumbnails/advertising.jpg');"></div>
    <div style="background-image: url('../img/wwdo/thumbnails/branded-entertainment.jpg');"></div>
    <div style="background-image: url('../img/wwdo/thumbnails/branded-publishing.jpg');"></div>
    <div style="background-image: url('../img/wwdo/thumbnails/social-media-m-anagement.jpg');"></div>
  </div>
  </div>
  <div id="cases">
    <div class="cases_cont">
      <img src="../img/cases/cases.png">
      {% for post in site.cases %}
      <a href="{{ post.url }}" style="background-image: url('{{site.cloud_host}}{{ post.tnimg }}');">
        <p>{{ post.title}}</p>
      </a>
     {% endfor %}
    </div>
  </div>
  <div id="work">
  <img src="../img/work/4e7_work.png">
    <div class="work-cont">
    {% for post in site.work %}
      <a href="{{ post.url }}" style="background-image: url('{{site.cloud_host}}{{ post.tnimg }}');">
      <p>{{ post.title}}</p>
      </a>
     {% endfor %}
    </div>
    <button type="button" class="work_more">MORE WORK</button>
  </div>
  <div id="platforms">
    <img src="../img/plattforms/platforms.png">
    <div style="background-image: url('../img/plattforms/thumbnails/trendsylvania-platform.jpg');"></div>
    <div style="background-image: url('../img/plattforms/thumbnails/thumbnail-artforum4e7-2.jpg');"></div>
    <div style="background-image: url('../img/plattforms/thumbnails/travel-guides-tips-platform.jpg');"></div>
    <div style="background-image: url('../img/plattforms/thumbnails/Notorious-patform.jpg');"></div>
  </div>
  <div id="alex" class="about_us">
    <img src="../img/about/about_us.png" class="main">
    <img src="../img/about/about_alex.jpg">
    <div class="about_text">
      <img src="../img/about/alex.png">
      <p>Partner-General Manager at Cayenne (Germany,
Austria, Spain, Netherlands, Czech Republic),
handling accounts such as Nintendo, Guess, Canon,
One Mobile, Skoda, among others. Partner-General
Manager, TBWA Latin America, handling accounts
such as Apple, Absolut, Chivas, Beiersdorf (Nivea),
Nissan.<br>
Senior Vice President, Creative Director at Grey New
York, responsible for Canada and South America,
handling accounts such as Procter & Gamble,
General Foods and Visa. Around the end of the '90s,
Alex and his partner moved closer to the digital arena,
being one of the first large advertising companies
to integrate digital with classic, giving the 
company the competitive advantage it holds up to 
these days.</p>
    </div>
  </div>
  <div id="selma" class="about_us">
    <div class="about_text">
      <img src="../img/about/selma.png">
      <p>Owner, Editor in Chief - Notorious Mag, Trendsylvania.
Partner-Creative Director, TBWA Latin America,
handling accounts such as Apple, Absolut, Chivas, Beiersdorf (Nivea), Nissan. Creative Director at
BBDO, handling accounts such as Volkswagen,
Visa, Club Med, Carrefour, among others.
The most awarded Creative Director at BBDO,
Selma decided to join Alex and launch TBWA Latin
America. Her campaigns for Volkswagen were so
famous and awarded that they were responsible
for Cayenne getting the european Skoda account.
Her love for fashion brought her to the production
of FWMag for the SaÌƒo Paulo Fashion Week, which subsequently led her to reposition the entire event
and take on the responsibility for its marketing.
In the four year period she was in charge, the SaÌƒo
Paulo Fashion Week jumped from 7th to 5th position worldwide.
Awards: Cannes, New York Festivals, London International Awards, Clio.</p>
    </div>
    <img src="../img/about/about_selma.jpg">
  </div>
  <div id="press">
  {% for img in site.img.press %}
    <img src="{{img}}">
  {% endfor %}
  </div>
</div>