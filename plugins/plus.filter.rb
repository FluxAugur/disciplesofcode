# Plus filter for Jekyll
#
# Adds addition functionality to Jekyll.

module Jekyll
  module PlusFilter

    def plus(input, addend)
      input.to_i + addend.to_i
    end
  end
end