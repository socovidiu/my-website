---
layout: default
title: Home
---

## About Me

This is a brief introduction about myself.

### Contact Information

- **Email:** [ovidiu.suciusoc@gmail.com](mailto:ovidiu.suciusoc@gmail.com)
- **Phone:** [+40 771 440 283](tel:+40 771 440 283)
- **LinkedIn:** [suciu-ovidiu-4a6ba1169](https://linkedin.com/in/suciu-ovidiu-4a6ba1169)
- **GitHub:** [socovidiu](https://github.com/socovidiu)

## My Projects

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}
    </li>
  {% endfor %}
</ul>

## Contact Me

You can reach me at ovidiu.suciusoc@gmail.com.