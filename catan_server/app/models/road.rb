class Road < ApplicationRecord
  belongs_to :player
  belongs_to :settlements
end
