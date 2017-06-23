class Player < ApplicationRecord
  has_many :player_roads
  has_many :roads, through: :player_roads
  has_many :player_settlements
  has_many :settlements, through: :player_settlements
  belongs_to :game
end
