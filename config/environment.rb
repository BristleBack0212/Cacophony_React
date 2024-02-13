# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# Allows redux state to follow javascript convention

Jbuilder.key_format camelize: :lower



