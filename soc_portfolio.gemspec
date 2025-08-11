# frozen_string_literal: true
Gem::Specification.new do |s|
  s.name          = "soco-portfolio"
  s.version       = "0.1.0"
  s.authors       = ["Ovidiu Suciu"]
  s.email         = ["ovidiu.suciusoc@gmail.com"]
  s.summary       = "A clean, portfolio-first Jekyll theme"
  s.homepage      = "https://profile.com"
  s.license       = "MIT"
  s.required_ruby_version = ">= 2.7"
  s.files         = Dir.glob("**/*", File::FNM_DOTMATCH).reject { |f| f =~ /(^|\/)(\.git|pkg|node_modules)(\/|$)/ }
  s.add_runtime_dependency "jekyll", ">= 4.3", "< 5.0"
  s.add_runtime_dependency "jekyll-seo-tag", ">= 2.8"
  s.add_runtime_dependency "jekyll-sitemap", ">= 1.4"
end