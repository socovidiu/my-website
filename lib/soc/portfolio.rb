# frozen_string_literal: true
require "jekyll"
module Soco
  module Portfolio
    class Generator < Jekyll::Generator
      safe true
      priority :lowest
      def generate(site)
        site.config["collections"] ||= {}
        site.config["collections"]["projects"] ||= { "output" => true }
      end
    end
  end
end