class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :points, :color, :gameID, :settlement_ids, :settlementCount, :road_ids, :roadCount, :bricks, :grains, :ores, :lumbers, :wools
end
