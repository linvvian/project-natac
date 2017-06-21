class RoadSerializer < ActiveModel::Serializer
  attributes :id, :top_coordinate, :left_coordinate
  has_many :settlements
end
