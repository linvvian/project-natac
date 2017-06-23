class PlayerRoad < ApplicationRecord
  belongs_to :player
  belongs_to :road
end
