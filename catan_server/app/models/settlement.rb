class Settlement < ApplicationRecord
  has_and_belongs_to_many :tiles
  has_and_belongs_to_many :roads
end
