class SettlementSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  has_one :player
end
