# Modulo filter for Jekyll
#
# Adds modulo functionality to Jekyll.

module Jekyll
  module ModuloFilter

    def mod(input, modulus)
      input.to_i % modulus.to_i
    end
  end
end
