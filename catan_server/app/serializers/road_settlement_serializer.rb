class RoadSettlementSerializer < ActiveModel::Serializer
  attributes :id
  attribute :roads_id

  def roads_id
    object.roads.map do |r|
      r.id
    end
  end
end
