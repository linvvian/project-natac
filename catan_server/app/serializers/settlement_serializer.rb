class SettlementSerializer < ActiveModel::Serializer
  attributes :id, :x_coordinate, :y_coordinate
  attribute :tiles_id
  has_many :roads, serializer: SettlementRoadSerializer

  def tiles_id
    object.tiles.map { |e| e.id }
  end
end
