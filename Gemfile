source 'https://rubygems.org'
ruby '2.1.1'

gem 'rails', '4.1.2'
gem 'pg'
gem 'whiskey_disk'
gem 'jquery-rails'
gem 'devise'
gem 'bourbon'
gem 'neat'
gem 'sass-rails', '~> 4.0.3'
gem 'uglifier', '>= 1.3.0'
gem 'modernizr-rails'
gem 'normalize-rails'
gem 'coffee-rails', '~> 4.0.0'
gem 'turbolinks'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0',          group: :doc
gem 'spring',        group: :development

group :production do
  gem "heroku_rails_deflate"
end

group :development do
  gem "foreman"
  gem "guard-bundler"
  gem "guard-rspec"
  gem "guard-spork"
  gem "rb-fsevent", require: false
end

group :development, :test do
  gem "pry-rails"
  gem "pry-nav"
  gem "awesome_print"
  gem "quiet_assets"
  gem "rspec-rails"
end

group :test do
  gem "spork-rails"
  gem "database_cleaner"
  gem "shoulda-matchers"
  gem "capybara-webkit"
  gem "launchy"
  gem "fuubar"
  gem "simplecov"
end
