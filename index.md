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
    <img src="../img/camp.png">
  </div>
  <div id="eye" style="background-image: url('https://res.cloudinary.com/media4e7/image/upload/v1559997739/eye-text_lzacgy.png');"></div>
  <div id="features">
  <div class="feat_cont">
    <div style="background-image: url('https://res.cloudinary.com/media4e7/image/upload/v1559997739/advertising_z1cedf.jpg');"></div>
    <div style="background-image: url('https://res.cloudinary.com/media4e7/image/upload/v1559997738/branded-entertainment_xdxrnf.jpg');"></div>
    <div style="background-image: url('https://res.cloudinary.com/media4e7/image/upload/v1559997738/branded-publishing_wob1m5.jpg');"></div>
    <div style="background-image: url('https://res.cloudinary.com/media4e7/image/upload/v1559997739/social-media-m-anagement_i9bafc.jpg');"></div>
  </div>
  </div>
  <div id="cases">
  <img src="../img//cases.jpg">
    <div class="cases_cont">
      {% for post in site.cases %}
      <a href="{{ post.url }}" style="background-image: url('{{site.cloud_host}}{{ post.tnimg }}');">
        <p>{{ post.title}}</p>
      </a>
     {% endfor %}
    </div>
  </div>
  <div id="work">
  <img src="../img//4e7_work.png">
    <div class="work-cont">
    {% for post in site.work %}
      <a href="{{ post.url }}" style="background-image: url('{{site.cloud_host}}{{ post.tnimg }}');">
        <div class="hover-cont">
          {{ post.title}}
        </div>
      </a>
     {% endfor %}
    </div>
    <button type="button" class="work_more">MORE WORK</button>
  </div>
  <div id="platforms">
    <img src="../img/platforms.png">
    <div style="background-image: url('https://res.cloudinary.com/media4e7/image/upload/v1559997984/trendsylvania-platform_eua0xs.jpg');"></div>
    <div style="background-image: url('https://res.cloudinary.com/media4e7/image/upload/v1559997984/thumbnail-artforum4e7-2_m17zt8.jpg');"></div>
    <div style="background-image: url('https://res.cloudinary.com/media4e7/image/upload/v1559997984/travel-guides-tips-platform_p1uqkn.jpg');"></div>
    <div style="background-image: url('https://res.cloudinary.com/media4e7/image/upload/v1559997984/Notorious-patform_bxv0uj.jpg');"></div>
  </div>
  <div id="alex" class="about_us">
    <img src="../img/about_us.png" class="main">
    <img src="https://res.cloudinary.com/media4e7/image/upload/v1559998299/about_alex_frsevq.jpg">
    <div class="about_text">
      <img src="../img/alex.png">
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
      <img src="../img/selma.png">
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
    <img src="https://res.cloudinary.com/media4e7/image/upload/v1559998299/about_selma_e4vlvm.jpg">
  </div>
  <div id="press">
  {% for img in site.img.press %}
    <img src="{{img}}">
  {% endfor %}
  </div>
</div>