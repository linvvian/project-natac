class Road < ApplicationRecord
  has_and_belongs_to_many :settlements
  has_many :player_roads
  has_many :players, through: :player_roads
end
