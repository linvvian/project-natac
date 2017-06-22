class SettlementRoadSerializer < ActiveModel::Serializer
  attributes :id
  attribute :settlements_id

  def settlements_id
    object.settlements.map do |s|
      s.id
    end
  end
end
