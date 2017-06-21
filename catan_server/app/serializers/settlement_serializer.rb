class SettlementSerializer < ActiveModel::Serializer
  attributes :id, :x_coordinate, :y_coordinate
  has_many :tiles
  has_many :roads
end
