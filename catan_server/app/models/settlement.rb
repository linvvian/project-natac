class Settlement < ApplicationRecord
  belongs_to :player
  has_many :roads
end
