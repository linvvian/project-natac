class PlayerSettlement < ApplicationRecord
  belongs_to :player
  belongs_to :settlement
end
