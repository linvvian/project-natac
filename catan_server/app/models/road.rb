class Road < ApplicationRecord
  has_and_belongs_to_many :settlements
end
