source "https://rubygems.org"

gem "jekyll", "~> 3.10"
gem "kramdown-parser-gfm", "~> 1.1"

gem "minima-reboot", "~> 1.0.26"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
#gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-remote-theme"
  gem "jekyll-redirect-from"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

# No longer part of default gems
gem "csv"
gem "base64"
gem "bigdecimal"

# https://danielsieger.com/blog/2021/03/28/check-broken-links-jekyll.html
# https://github.com/gjtorikian/html-proofer/blob/main/README.md
gem "html-proofer"
