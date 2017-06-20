class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :wins, :losses, :points
end
