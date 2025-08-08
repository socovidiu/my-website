---
layout: home
title: Welcome to My Personal Website
---

## About Me

This is a brief introduction about myself.

## My Projects

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}
    </li>
  {% endfor %}
</ul>

## Contact Me

You can reach me at myemail@example.com.