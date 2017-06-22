class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :settlements, :roads, :resources, :name, :points, :settlementCount, :roadCount, :color
end
