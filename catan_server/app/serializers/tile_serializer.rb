class TileSerializer < ActiveModel::Serializer
  attributes :id, :top, :left, :value, :resource
end
