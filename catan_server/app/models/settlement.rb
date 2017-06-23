class Settlement < ApplicationRecord
  has_and_belongs_to_many :tiles
  has_and_belongs_to_many :roads
  has_many :player_settlements
  has_many :players, through: :player_settlements
end
