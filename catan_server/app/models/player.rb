class Player < ApplicationRecord
  has_many :settlements
  has_many :roads
  has_many :wools
  has_many :lumbers
  has_many :ores
  has_many :grains
  has_many :bricks
end
